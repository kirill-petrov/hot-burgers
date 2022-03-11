import React from 'react';

class AddBurgerForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createBurger = (event) => {
    event.preventDefault();

    const burger = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value) || 0,
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    }

    this.props.addBurger(burger);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form
        className='burger-edit'
        onSubmit={this.createBurger}
      >
        <input
          name='name'
          type='text'
          placeholder='Name'
          autoComplete='off'
          ref={this.nameRef}
        />
        <input
          name='price'
          type='text'
          placeholder='Price'
          autoComplete='off'
          ref={this.priceRef}
        />
        <select
          name='status'
          className='status'
          ref={this.statusRef}
        >
          <option value="available">Доступно</option>
          <option value="unavailable">На стопе</option>
        </select>
        <textarea
          name='desc'
          type='text'
          placeholder='Desc'
          ref={this.descRef}
        />
        <input
          name='image'
          type='text'
          placeholder='Image'
          autoComplete='off'
          ref={this.imageRef}
        />
        <button type='submit'>Добавить в меню</button>
      </form>
    )
  }
}

export default AddBurgerForm;
