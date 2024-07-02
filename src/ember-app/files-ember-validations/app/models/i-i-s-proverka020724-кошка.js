import {
  defineNamespace,
  Model as КошкаMixin
} from '../mixins/regenerated/models/i-i-s-proverka020724-кошка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КошкаMixin, {
});

defineNamespace(Model);

export default Model;
