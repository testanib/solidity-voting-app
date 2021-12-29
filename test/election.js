var Election = artifacts.require("./Election.sol");

let election;
before(async () => {
  election = await Election.deployed(); //this will get the deployed copy of the contract
});


contract("Election", function(accounts) {
    var electionInstance;
    it("initializes with 4 candidates", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidateCount();
        }).then(function(count) {
            assert.equal(count, 4);
        });
    });

    it("initializes the candidates with correct values", function() {
        return Election.deployed().then(function(instance) {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "contains the correct id");
            assert.equal(candidate[1], "Candidate 1", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
            return electionInstance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[0], 2, "contains the correct id");
            assert.equal(candidate[1], "Candidate 2", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
            return electionInstance.candidates(3);
        }).then(function(candidate) {
            assert.equal(candidate[0], 3, "contains the correct id");
            assert.equal(candidate[1], "Candidate 3", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
            return electionInstance.candidates(4);
        }).then(function(candidate) {
            assert.equal(candidate[0], 4, "contains the correct id");
            assert.equal(candidate[1], "Candidate 4", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
        });
    });

    it("allows a voter to cast a vote", function() {
        return Election.deployed().then(function(instance) {
            electionInstance = instance;
            candidateId = 1;
            return electionInstance.vote(candidateId, { from: accounts[0] });
        }).then(function(receipt) {
            //assert.equal(receipt.logs.length, 1, "an event was triggered");
            //assert.equal(receipt.logs[0].event, "votedEvent", "the event type is correct");
            //assert.equal(receipt.logs[0].args._candidateId.toNumber(), candidateId, "the candidate id is correct");
            return electionInstance.voters(accounts[0]);
        }).then(function(voted) {
            assert(voted, "the voter was marked as voted");
            return electionInstance.candidates(candidateId);
        }).then(function(candidate) {
            var voteCount = candidate[2];
            assert.equal(voteCount, 1, "increments the candidate's vote count");
        });
    });
});