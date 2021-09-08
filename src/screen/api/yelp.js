import axios  from "axios";

export default axios.create({
    baseURL:' https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
        'Bearer Cm5RQhNAtkElv1TEUpvIsDjIgDrsIP5ejW9YzGZDyPENK_7qzWtJd70cqMX4yBvAT7VghyPmpOcUrWsHW4jVw3YaTUv1D6PREaEm3lB1ybCmC2SUGZyVATdK4a8kYXYx'
    }

}); 