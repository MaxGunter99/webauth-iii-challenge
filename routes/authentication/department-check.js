
//EXPORTS ⬇︎
module.exports = department => {
    return function ( req , res , next ) {
        if ( req.decodedJwt.department && req.decodedJwt.department.includes( department )) {
            next()
        } else {
            res.status( 403 ).json({ message:  'Access Denied ❌' })
        }
    }
};