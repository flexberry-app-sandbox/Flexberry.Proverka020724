import {
  defineNamespace,
  Model as ЖильеMixin
} from '../mixins/regenerated/models/i-i-s-proverka020724-жилье';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЖильеMixin, {
});

defineNamespace(Model);

export default Model;
