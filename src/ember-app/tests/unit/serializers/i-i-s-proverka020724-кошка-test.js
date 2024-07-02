import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proverka020724-кошка', 'Unit | Serializer | i-i-s-proverka020724-кошка', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proverka020724-кошка',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-proverka020724-жилье',
    'model:i-i-s-proverka020724-кошка',
    'model:i-i-s-proverka020724-лапа-кошки',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
