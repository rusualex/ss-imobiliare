import { IMongoResponse } from '../model/mongo-response.model';
import { IApartment, Apartment } from '../model/apartment.model';

export class ApartmentService {
  async getApartments(filter: object): Promise<IApartment[]> {
    return Apartment.find(filter);
  }

  async getApartmentById(apartmentId: string): Promise<IApartment> {
    return Apartment.findOne({ _id: apartmentId }) as any as IApartment;
  }

  async saveApartment(apartment: IApartment): Promise<IApartment> {
    return new Apartment(apartment).save();
  }

  async updateApartment(apartment: IApartment): Promise<IMongoResponse> {
    return Apartment.updateOne({ _id: apartment._id }, { $set: apartment });
  }

  async deleteApartmentById(apartmentId: string): Promise<IMongoResponse> {
    return Apartment.deleteOne({ _id: apartmentId });
  }


  // async deleteNestedUsers(userId: string): Promise<void> {
  //   const apartments: IApartment[] = await this.getApartmentsByNestedUserId(userId);

  //   apartments.forEach((apartment: IApartment) => {
  //     const attendingUserIndex: number = apartment.attendingUsers
  //       .findIndex((attendingUser: IUser) => attendingUser._id === userId);
  //     if (attendingUserIndex !== -1) {
  //       apartment.attendingUsers.splice(attendingUserIndex);
  //     }

  //     const trainerIndex: number = apartment.trainers
  //       .findIndex((trainer: IUser) => trainer._id === userId);
  //     if (trainerIndex !== -1) {
  //       apartment.trainers.splice(trainerIndex);
  //     }

  //     this.updateApartment(apartment);
  //   });
  // }

  // private async getApartmentsByNestedUserId(userId: string): Promise<IApartment[]> {
  //   return this.getApartments({
  //     $or:
  //       [
  //         {'attendingUsers._id': userId},
  //         {'trainers._id': userId}
  //       ]
  //   });
  // }
}
