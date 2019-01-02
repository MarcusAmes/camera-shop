import React, { Component } from 'react'
import { Form, Input } from 'reactstrap'

class SearchBar extends Component {

  _onChange = ({target}) => {
    this.props.editSearch(target.value)
  }
  render() {
    
    return (
      <div>
        <Form>
          <Input onChange={this._onChange} type="text" placeholder="Search for a camera" value={this.props.search}/>
        </Form>
      </div>
    )
  }
}

export default SearchBar