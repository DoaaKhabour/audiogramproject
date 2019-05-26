import React,{Component} from 'react'
import  classes from './FeedBack.css' ;
import Input from './Input' ;
import Button from './Button' ;

class FeedBack extends Component {
    state = {
  FeedBackForm: {
            CustomerName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Name"'
                },
                value: '',
                validation: {
                    required: true
                },
                valid:false,
                touched:false
            },
            CustomerFeedBack: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your FeedBack"'
                },
                value: '',
                validation: {
                    required: true
                },
                valid:false,
                touched:false
            },
            AddedItem: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Item To Be Added ..'
                },
                value: '',
                valid:false,
                touched:false
            },
            itemcat: {
                elementType: 'select',
                elementConfig: {
                    options: [{ value: 'female', displayValue: 'Female' },
                    { value: 'Male', displayValue: 'Male' }],


                },
                value: '',
                valid:true
            }
        },
        formIsValid:false,
        loading:false

    }
    submitForm = () => {
        console.log('Submit Data');
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFeedBack = {
            ...this.state.FeedBackForm
        };
        const updatedFormElement = {
            ...updatedFeedBack[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched=true;
        updatedFeedBack[inputIdentifier] = updatedFormElement;
        
        let formIsValid=true;
        for(let inputIdentifier in updatedFeedBack){
            formIsValid=updatedFeedBack[inputIdentifier].valid&&formIsValid;
        }
        this.setState({ FeedBackForm: updatedFeedBack,formIsValid:formIsValid });

    }
    itemHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.FeedBackForm) {
            formData[formElementIdentifier] = this.state.FeedBackForm[formElementIdentifier].value;
        }
      
      
    }
   
       
   
    render() {
        const formArrayElement = [];
        for (let key in this.state.FeedBackForm) {
            formArrayElement.push({
                id: key,
                config: this.state.FeedBackForm[key]
            })
        }
        let form = (
            <form onSubmit={this.itemHandler} className="FeedBack">
                {formArrayElement.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />

                ))}
                <Button btnType="Success" >Submit Form</Button>

            </form>
        );

        return (
            <div className={classes.FeedBack}>
                <h4>Please Enter Your FeedBack </h4>
                {form}
            </div>
        )
    }
}
export default FeedBack;