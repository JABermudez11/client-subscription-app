import React from 'react'

const SubsForm = props =>  {
    const { handleSubmit, handleChange } = props;
    return (
        <div className="ui form">
            <form onSubmit={handleSubmit}>
                <h1>Add To Your Subscription List</h1>
                <div className="ui field">
                <label>
                    Company Name:
                    <input name="company" type="text" placeholder="Company Name"
                    onChange={handleChange}/>
                </label>
                </div>
                <div className="ui field">
                <label>
                    Cost:
                    <input name="cost" type="number" placeholder="0"
                    onChange={handleChange}/>
                </label>
                <label>
                    Start Date:
                    <input name="Start Date" type="date"
                    onChange={handleChange}/>
                </label>   
                <label>
                    End Date:
                    <input name="End Date" type="date"
                    onChange={handleChange}/>
                </label>              
                </div>
                <input name="submit" value="Add New Subscription" type="submit" className="ui basic purple button" />
            </form>
        </div>
    )
}

export default SubsForm