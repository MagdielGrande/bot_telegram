const ExplorerController = require("./../../lib/controllers/ExplorerController");
describe("Test for Explorerservice", () => {

    test("Obtener String  ", () => {

        const missionSelected= "node"
  
        const getExplorers = ExplorerController.getExplorersUsernamesByMission(missionSelected)
        const lista = getExplorers.toString()
        const separateString= lista.split(',')
        const union = separateString.join(' \n')
        expect(union).toContain("ajolonauta1");
    });

});