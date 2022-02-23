Moralis.initialize("ulXYUwPWC828l1VTSGzybhUNYsQQAnF4BAGeRjsD");
Moralis.serverURL = "https://wjlh8hq6n7px.usemoralis.com:2053/server";

init = async () => { 
    window.ethers = await Moralis.ethers.enable();
    const user = await Moralis.User.current;
}

defineNewObject = async () => {
    const yieldPercent = Moralis.Object.extend("yield");
    const yield = new yieldPercent();
    yield.set('percent', 5);

    await yield.save
}

getFirstYield = async () => {
    const query = new Moralis.Query("yield")
    const firstYield = query.first();
    return firstYield;
}

editYieldPer = async () => {
    const yieldChange = getFirstYield()
    yieldChange
}
init();