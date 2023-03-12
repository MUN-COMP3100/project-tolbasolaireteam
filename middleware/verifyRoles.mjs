export const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles) {
            console.log('No roles');
            return res.sendStatus(401);
        }
        const rolesArray = [...allowedRoles];
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);
        if (!result) {
            console.log('No roles match');
            console.log(`user roles: ${req.roles} \n allowed roles: ${allowedRoles}`);
            return res.sendStatus(401);
        }
        next();
    }
}