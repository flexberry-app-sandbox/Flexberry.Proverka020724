import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proverka020724-кошка', 'Unit | Model | i-i-s-proverka020724-кошка', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proverka020724-жилье',
    'model:i-i-s-proverka020724-кошка',
    'model:i-i-s-proverka020724-лапа-кошки',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
