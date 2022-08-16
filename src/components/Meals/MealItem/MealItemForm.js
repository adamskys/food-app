import Input from '../../UI/Input';
import Styles from './style/MealItemForm';

const MealItemForm = (props) => {
  return (
    <Styles.Form>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </Styles.Form>
  );
};

export default MealItemForm;
