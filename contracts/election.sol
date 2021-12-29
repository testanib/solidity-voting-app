pragma solidity ^0.8.11;

contract Election{
    //model candidate
    struct Candidate{
        uint id; //uint = uint256
        string name; //bytes32 uses less gass than string
        uint voteCount;
    }
    //store candidate
    //store accounts that have voted
    mapping(address => bool) public voters;
    //fetch candidate
    mapping(uint => Candidate) public candidates; // cant determine size or iterate, keys without values return default value
    //store candidate count
    uint public candidateCount;


    constructor() public{
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
        addCandidate("Candidate 3");
        addCandidate("Candidate 4");
    }

    function addCandidate(string memory _name) private{
        //create candidate
        candidateCount++;
        candidates[candidateCount] = Candidate(candidateCount, _name, 0);
    }

    //can pass meta data to function
    function vote (uint _candidateId) public{
        //check that voter hasnt voted
        require(!voters[msg.sender]);
        //check if candidate exists
        require(candidates[_candidateId].id != 0 && _candidateId <= candidateCount);
        //record that voter voted
        voters[msg.sender] = true;
        //increment vote count
        candidates[_candidateId].voteCount++;
    }

}