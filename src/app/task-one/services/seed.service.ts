import { Injectable } from '@angular/core';
import { AccountModel, CustomerModel } from './store';

@Injectable()
export class SeedService {
  public getCustomer(): CustomerModel {
    return {
      personalD: { firstName: 'Borislav', lastName: 'Valkov' },
      contactDetails: {
        email: 'bvalkov1@gmail.com',
        phoneNumber: '0884-658-038',
      },
      todoList: [
        'Complete floLive task',
        'Go to ATM',
        'Add money to balance',
        'Make first payment for apartment',
      ],
      suggestions: [
        {
          location: 'Maliovitsa',
          url: 'https://i.ibb.co/2kkrNnZ/fbt.jpg',
        },
        {
          location: 'Rila lakes',
          url: 'https://i.ibb.co/R3jYzxL/IMG-20190830-114544.jpg',
        },
        {
          location: 'Before botev peak',
          url: 'https://i.ibb.co/QdJNVKF/IMG-20190901-150253.jpg',
        },
        {
          location: 'Musala',
          url: 'https://i.ibb.co/0y1Hbnz/IMG-20190915-132030.jpg',
        },
        {
          location: 'Musala 2',
          url: 'https://i.ibb.co/vPChd1h/IMG-20190915-144821.jpg',
        },
        {
          location: 'Karadjov Stone',
          url: 'https://i.ibb.co/VmNyPKw/IMG-20191012-180725.jpg',
        },
        {
          location: 'Karadjov Stone 3',
          url: 'https://i.ibb.co/fvnCRrT/IMG-20191012-181410.jpg',
        },
        {
          location: 'Kupena hut',
          url: 'https://i.ibb.co/LQw194H/IMG-20200411-153903.jpg',
        },
        {
          location: 'Kupena hut 2',
          url: 'https://i.ibb.co/CzcH4WR/IMG-20200411-165346.jpg',
        },
      ],
    };
  }

  public getAccount(): AccountModel {
    return {
      legalInformation: {
        passportNumber: 123456,
        avatarUrl: 'https://i.ibb.co/2kkrNnZ/fbt.jpg',
      },
      transactions: [
        { amount: 1.1, currency: 'BGN', date: new Date('1/2/2019') },
        { amount: 2.1, currency: 'BGN', date: new Date('1/6/2019') },
        { amount: 4.3, currency: 'USD', date: new Date('4/2/2019') },
      ],
      settings: {
        desktopNotification: false,
        mailNotification: true,
        smsNotification: true,
      },
    };
  }
}
