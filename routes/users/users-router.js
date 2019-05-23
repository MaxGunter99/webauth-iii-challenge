
//IMPORTS ⬇︎
const router = require( 'express' ).Router();
const Users = require( './users-model' );
const restricted = require( '../authentication/restricted-middleware' );
// const departmentCheck = require( '../authentication/department-check' );

//GET ALL USERS ⬇︎
router.get( '/' , restricted , ( req , res ) =>  {
    Users.find()
        .then( users => {
            res.json( users );
        })
        .catch( error => {
            res.send({ message: 'Server Error getting users' , error })
        })
});

//EXPORTS ⬇︎
module.exports = router;