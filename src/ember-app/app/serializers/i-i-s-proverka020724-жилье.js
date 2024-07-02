import { Serializer as ЖильеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proverka020724-жилье';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЖильеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
