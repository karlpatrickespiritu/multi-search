import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

class MenuDrawer extends React.Component {
  render() {
    const { menu } = this.props
    const menuList = menu.options.map((option) => {
      return <MenuItem key={option.id} onTouchTap={this.goToLink.bind(this, option.link)}>{option.title}</MenuItem>
    })

    return (
      <Drawer docked={false} width={200} open={menu.is_opened} onRequestChange={(open) => this.setMenuIsOpen(open)}>
        {menuList}
      </Drawer>
    );
  }
}

export default connect((store) => {
  return {
    menu: store.menu
  }
})(MenuDrawer)