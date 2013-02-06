$(function() {
  
  data = JSON.parse(BL.getContentForPreview().content[0].data);
  $('#tweet').text('You just tweeted: ' + data.tweetText)
  if (BL.twitterAuthenticated()) {
    BL.tweet("Just autogenerated another tweet!", true, data.oncePerSession, function() {
      $('#tweet').text('You just tweeted: ' + data.tweetText)
    })
  }
    
  BL.previewReady(); // this is what tells the preview page to display this component - must be called
})