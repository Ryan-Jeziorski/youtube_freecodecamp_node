const authorize = (req,res,next) => {
    const {user} = req.query;

    if(user === 'ryan') {
        req.user = {name:'ryan',id:3};
        next();
    } else {
        res.status(404).send('Unauthorized');
        return;
    }
    console.log('Authorize');
    console.log();
    next();
};

module.exports = authorize;