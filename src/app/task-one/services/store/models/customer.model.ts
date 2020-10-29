import { ContactDetailsModel } from './contact-details.model';
import { ImageModel } from './image.model';
import { PersonalDetailsModel } from './personal-details.model';

export interface CustomerModel {
  personalD: PersonalDetailsModel;
  todoList: string[];
  suggestions: ImageModel[];
  contactDetails: ContactDetailsModel;
}
