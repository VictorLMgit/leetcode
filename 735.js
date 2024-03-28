/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let ans = [];
    
    for (let i = 0; i < asteroids.length; i++) {
        
        const currentAsteroid = asteroids[i];
        if (currentAsteroid < 0 && ans[ans.length-1] > 0 && Math.abs(currentAsteroid) == ans[ans.length-1]) {
            
            ans.pop();
            continue;
        }
        if (currentAsteroid < 0) {
            let temp = true;
            while (ans.length > 0 && ans[ans.length-1] > 0 && Math.abs(currentAsteroid) >= ans[ans.length-1]) { 
                if(Math.abs(currentAsteroid) == ans[ans.length-1]) {
                    temp = false;
                    ans.pop();
                    break;
                }
                ans.pop();
            }

            if((ans.length == 0 || ans[ans.length-1] < 0) && temp) ans.push(currentAsteroid);
        } else {
            ans.push(currentAsteroid);
        }

    }
    return ans;
};

const asteroids = [1,2,1,-2];
const r = asteroidCollision(asteroids);
console.log(r);