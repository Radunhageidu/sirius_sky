var param1 = process.argv[2].replace(/['"]/g, '');
var param2 = process.argv[3].replace(/['"]/g, '');
var masmove = [];
var pos = -1;
var step=0;


function MovMassStep() {

    if (param1.length != param2.length) return step=-1;

    for (i = 0; i < param2.length; i++)
    {
        masmove[i] = param2.charAt(i);
        if (masmove[i] == param1.charAt(0)) pos = i;

    }

    if (pos < 0) {
        return step = -1;
    }
    
    if (pos <= masmove.length / 2) //Change moving
    {
                                    //move left
        step = pos;
        for (i = 0; i < step; i++)
        {
            masmove.push(masmove.shift());

        }
       
        return step;
    }
    else
    {
                                    //move right
        step = masmove.length - pos;
        for (i = 0; i < step; i++)
        {
            masmove.unshift(masmove.pop());

        }

        return step;
    }

}

MovMassStep();
param2 = masmove.join('');
if (param2 == param1) {
    process.stdout.write(String(step));
}
else {
    process.stdout.write('-1');
}
