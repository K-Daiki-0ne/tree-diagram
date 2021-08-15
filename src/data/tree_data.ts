/*
 * Tree view rendering data
 */
export const data = {
	name: 'Parent',
	children: [{
		name: 'Child One',
    children: [{
      name: 'Child Theree',
    }, {
      name: 'Child Four'
    }, {
      name: 'Child Five'
    }]
	}, {
		name: 'Child Two',
    children: [{
      name: 'Child Six',
      children: [{
        name: 'Child Seven'
      }, {
        name: 'Child Eight'
      }, {
        name: 'Child Nine',
        children: [{
          name: 'Child Ten'
        }]
      }]
    }]
	}]
};