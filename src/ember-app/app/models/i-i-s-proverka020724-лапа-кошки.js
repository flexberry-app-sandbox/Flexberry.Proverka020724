import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ЛапаКошкиMixin
} from '../mixins/regenerated/models/i-i-s-proverka020724-лапа-кошки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЛапаКошкиMixin, Validations, {
});

export default Model;
