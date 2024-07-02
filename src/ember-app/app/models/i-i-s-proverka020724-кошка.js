import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as КошкаMixin
} from '../mixins/regenerated/models/i-i-s-proverka020724-кошка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КошкаMixin, Validations, {
});

export default Model;
