import { Serializer as КошкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proverka020724-кошка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КошкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
