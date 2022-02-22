Moralis.initialize("ptrJVYPZORMt9JaWSlQdYCj8bxeW1IuH4Zn1vZjQ");
Moralis.serverURL = "https://drilfrxmejyp.usemoralis.com:2053/server";

init = async () => {
    window.web3 = await Moralis.Web3.enable();
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