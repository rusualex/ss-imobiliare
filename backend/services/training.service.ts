import { IMongoResponse } from '../model/mongo-response.model';
import { ITraining, Training } from '../model/training.model';
import { IUser } from '../model/user.model';

export class TrainingService {
  async getTrainings(filter: object): Promise<ITraining[]> {
    return Training.find(filter);
  }

  async getTrainingById(trainingId: string): Promise<ITraining> {
    return Training.findOne({_id: trainingId});
  }

  async saveTraining(training: ITraining): Promise<ITraining> {
    return new Training(training).save();
  }

  async updateTraining(training: ITraining): Promise<IMongoResponse> {
    return Training.updateOne({_id: training._id}, {$set: training});
  }

  async deleteTrainingById(trainingId: string): Promise<IMongoResponse> {
    return Training.deleteOne({_id: trainingId});
  }

  async updateNestedUsers(user: IUser): Promise<void> {
    const trainings: ITraining[] = await this.getTrainingsByNestedUserId(user._id);

    trainings.forEach((training: ITraining) => {
      const attendingUserIndex: number = training.attendingUsers
        .findIndex((attendingUser: IUser) => attendingUser._id === user._id);
      if (attendingUserIndex !== -1) {
        training.attendingUsers[attendingUserIndex] = user;
      }

      const trainerIndex: number = training.trainers
        .findIndex((trainer: IUser) => trainer._id === user._id);
      if (trainerIndex !== -1) {
        training.trainers[trainerIndex] = user;
      }

      this.updateTraining(training);
    });
  }

  async deleteNestedUsers(userId: string): Promise<void> {
    const trainings: ITraining[] = await this.getTrainingsByNestedUserId(userId);

    trainings.forEach((training: ITraining) => {
      const attendingUserIndex: number = training.attendingUsers
        .findIndex((attendingUser: IUser) => attendingUser._id === userId);
      if (attendingUserIndex !== -1) {
        training.attendingUsers.splice(attendingUserIndex);
      }

      const trainerIndex: number = training.trainers
        .findIndex((trainer: IUser) => trainer._id === userId);
      if (trainerIndex !== -1) {
        training.trainers.splice(trainerIndex);
      }

      this.updateTraining(training);
    });
  }

  private async getTrainingsByNestedUserId(userId: string): Promise<ITraining[]> {
    return this.getTrainings({
      $or:
        [
          {'attendingUsers._id': userId},
          {'trainers._id': userId}
        ]
    });
  }
}
