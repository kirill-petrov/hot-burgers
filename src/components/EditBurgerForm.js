import React from 'react';

class EditBurgerForm extends React.Component {
  handleChange = event => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    const updatedBurger = {
      ...this.props.burger,
      [event.currentTarget.name]: event.currentTarget.value,
    }

    this.props.updateBurger(this.props.index, updatedBurger);
  }

  render() {
    return (
      <div className="burger-edit">
        <input
          onChange={this.handleChange}
          name='name'
          type='text'
          value={this.props.burger.name}
        // placeholder='Name'
        // autoComplete='off'
        // ref={this.nameRef}
        />
        <input
          onChange={this.handleChange}
          name='price'
          type='text'
          value={this.props.burger.price}
        // placeholder='Price'
        // autoComplete='off'
        // ref={this.priceRef}
        />
        <select
          onChange={this.handleChange}
          name='status'
          className='status'
          value={this.props.burger.status}
        // ref={this.statusRef}
        >
          <option value="available">Доступно</option>
          <option value="unavailable">На стопе</option>
        </select>
        <textarea
          onChange={this.handleChange}
          name='desc'
          value={this.props.burger.desc}
        // type='text'
        // placeholder='Desc'
        // ref={this.descRef}
        />
        <input
          onChange={this.handleChange}
          name='image'
          type='text'
          value={this.props.burger.image}
        // placeholder='Image'
        // autoComplete='off'
        // ref={this.imageRef}
        />
      </div>
    )
  }
}


export default EditBurgerForm
