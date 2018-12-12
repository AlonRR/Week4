const handleComplaints = function (complaint) {
    const complaintType = {
        finance: `Money dosn't grow on trees, you know.`,
        weather: `It is the way of nature. Not much to be done.`,
        emotions: `It'll pass, as all things do, with time.`
    }
    console.log(complaintType[complaint.type])
}
module.exports.handleComplaints = handleComplaints