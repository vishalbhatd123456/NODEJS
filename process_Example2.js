//take the command line arguements from the display

process.argv.forEach((value,index,array) =>
{
    console.log(`${index}: ${value}`);
});

