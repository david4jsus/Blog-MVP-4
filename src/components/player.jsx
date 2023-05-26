import PlayerCard from './player_card';
import PlayerBar from './player_bar';
import styles from '@/styles/player.module.css';
import PlayerLibrary from './player_library';
import capi from '@/api/capi';
import React from 'react';

/**
 * JavaScript's modulo operator is buggy, let's use our own
 * (https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm)
 */
Number.prototype.mod = function(n) {
   return ((this % n) + n) % n;
}

/**
 * SoundCloud API (derived from SoundCloud API script: https://w.soundcloud.com/player/api.js)
 */
const SC_API = () => {
   var SC="object"==typeof SC?SC:{};SC.Widget=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var r,o,i,u=n(1),a=n(2),c=n(3),s=u.api,l=u.bridge,d=[],f=[],p=/^http(?:s?)/;function E(e){var t,n;for(t=0,n=f.length;t<n&&!1!==e(f[t]);t++);}function v(e){return e.contentWindow?e.contentWindow:e.contentDocument&&"parentWindow"in e.contentDocument?e.contentDocument.parentWindow:null}function _(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(e[t]);return n}function S(e,t,n){n.callbacks[e]=n.callbacks[e]||[],n.callbacks[e].push(t)}function h(e,t){var n=!0;return t.callbacks[e]=[],E((function(t){if((t.callbacks[e]||[]).length)return n=!1,!1})),n}function y(e,t,n){var r,o,i=v(n);if(!i.postMessage)return!1;r=n.getAttribute("src").split("?")[0],o=JSON.stringify({method:e,value:t}),"//"===r.substr(0,2)&&(r=window.location.protocol+r),r=r.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),i.postMessage(o,r)}function b(e){var t;return E((function(n){if(n.instance===e)return t=n,!1})),t}function g(e){var t;return E((function(n){if(v(n.element)===e)return t=n,!1})),t}function m(e,t){return function(n){var r,o=!!((r=n)&&r.constructor&&r.call&&r.apply),i=b(this),u=!o&&t?n:null,a=o&&!t?n:null;return a&&S(e,a,i),y(e,u,i.element),this}}function R(e,t,n){var r,o,i;for(r=0,o=t.length;r<o;r++)e[i=t[r]]=m(i,n)}function O(e,t,n){return e+"?url="+t+"&"+function(e){var t,n,r=[];for(t in e)e.hasOwnProperty(t)&&(n=e[t],r.push(t+"="+("start_track"===t?parseInt(n,10):n?"true":"false")));return r.join("&")}(n)}function w(e,t,n){var r,o,i=e.callbacks[t]||[];for(r=0,o=i.length;r<o;r++)i[r].apply(e.instance,n);(function(e){var t,n=!1;for(t in a)if(a.hasOwnProperty(t)&&a[t]===e){n=!0;break}return n}(t)||t===s.READY)&&(e.callbacks[t]=[])}function A(e){var t,n,r,o,i;try{n=JSON.parse(e.data)}catch(e){return!1}return t=g(e.source),r=n.method,o=n.value,(!t||P(e.origin)===P(t.domain))&&(t?(r===s.READY&&(t.isReady=!0,w(t,"__LATE_BINDING__"),h("__LATE_BINDING__",t)),r!==s.PLAY||t.playEventFired||(t.playEventFired=!0),r!==s.PLAY_PROGRESS||t.playEventFired||(t.playEventFired=!0,w(t,s.PLAY,[o])),i=[],void 0!==o&&i.push(o),void w(t,r,i)):(r===s.READY&&d.push(e.source),!1))}function P(e){return e.replace(p,"")}window.addEventListener?window.addEventListener("message",A,!1):window.attachEvent("onmessage",A),e.exports=i=function(e,t,n){var i;if((""===(i=e)||i&&i.charCodeAt&&i.substr)&&(e=document.getElementById(e)),!function(e){return!(!e||1!==e.nodeType||"IFRAME"!==e.nodeName.toUpperCase())}(e))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(n=n||{},e.src=O("http://wt.soundcloud.test:9200/",t,n));var u,a,c=g(v(e));return c&&c.instance?c.instance:(u=d.indexOf(v(e))>-1,a=new r(e),f.push(new o(a,e,u)),a)},i.Events=s,window.SC=window.SC||{},window.SC.Widget=i,o=function(e,t,n){this.instance=e,this.element=t,this.domain=function(e){var t,n,r,o="";"//"===e.substr(0,2)&&(e=window.location.protocol+e);for(r=e.split("/"),t=0,n=r.length;t<n&&t<3;t++)o+=r[t],t<2&&(o+="/");return o}(t.getAttribute("src")),this.isReady=!!n,this.callbacks={}},(r=function(){}).prototype={constructor:r,load:function(e,t){if(e){t=t||{};var n=this,r=b(this),o=r.element,i=o.src,u=i.substr(0,i.indexOf("?"));r.isReady=!1,r.playEventFired=!1,o.onload=function(){n.bind(s.READY,(function(){var e,n=r.callbacks;for(e in n)n.hasOwnProperty(e)&&e!==s.READY&&y(l.ADD_LISTENER,e,r.element);t.callback&&t.callback()}))},o.src=O(u,e,t)}},bind:function(e,t){var n=this,r=b(this);return r&&r.element&&(e===s.READY&&r.isReady?setTimeout(t,1):r.isReady?(S(e,t,r),y(l.ADD_LISTENER,e,r.element)):S("__LATE_BINDING__",(function(){n.bind(e,t)}),r)),this},unbind:function(e){var t,n=b(this);n&&n.element&&(t=h(e,n),e!==s.READY&&t&&y(l.REMOVE_LISTENER,e,n.element))}},R(r.prototype,_(a)),R(r.prototype,_(c),!0)},function(e,t){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}},function(e,t){e.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}},function(e,t){e.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}]);
   //# sourceMappingURL=http://ent/web-sourcemaps/api.js-27d0ec1de3c5.map
   return SC;
}

/**
 *  Enum for defining the state of the player
 */
let PlayerState = {
   "CLOSED":   0,
   "OPEN":     1,
   "EXPANDED": 2
}

/**
 * Alotted time (in ms) to press the "rewind" button to make it play the previous track in the queue instead of rewinding to the start of the current track
 */
const REWIND_OPTION_TIME = 1500;

/**
 * Generate a shuffled queue ordering
 */
const ShuffleQueueGenerator = (length, currentTrack) => {

   // Create an initial queue
   let shuffleQueue = [];
   for (let i = 0; i < length; i++) {
      shuffleQueue.push(i);
   }

   // Shuffle the array if it's longer than a single item
   if (length > 1) {

      // Shuffle this queue (Fisher-Yates algorithm)
      for (let lastIndex = shuffleQueue.length - 1; lastIndex > 0; lastIndex--) {
         let randIndex = Math.floor(Math.random() * shuffleQueue.length);
         let temp = shuffleQueue[lastIndex];
         shuffleQueue[lastIndex] = shuffleQueue[randIndex];
         shuffleQueue[randIndex] = temp;
      }

      // Set the current track as the first in the shuffled queue
      let currentTrackIndex = shuffleQueue.findIndex(item => item == currentTrack);
      let temp = shuffleQueue[currentTrackIndex];
      shuffleQueue[currentTrackIndex] = shuffleQueue[0];
      shuffleQueue[0] = temp;
   }

   // Shuffling done, return the new shuffled queue
   return shuffleQueue;
}

export default class Player extends React.Component {
   constructor(props) {
      super(props);

      this.state={
         /**
          * Object representing the SoundCloud widget
          */
         widget: null,
         /**
          * Current state of the player
          */
         playerState: PlayerState.CLOSED,
         /**
          * Array of track objects representing the queue
          */
         queue: [],
         /**
          * Array of queue positions representing the shuffle queue
          */
         shuffleQueue: [],
         /**
          * Integer (-1 if empty queue) representing the current track position in the queue
          */
         currentTrack: -1,
         /**
          * Integer (-1 if not in shuffle mode or empty queue) representing the current track in the shuffle queue
          */
         currentShuffleTrack: -1,
         /**
          * Integer representing the volume of the player (from 0 to 100)
          */
         volume: 100,
         /**
          * Whether the player is muted
          */
         isMuted: false,
         /**
          * Whether the player is on repeat mode
          */
         isRepeat: false,
         /**
          * Whether the player is in shuffle mode
          */
         isShuffle: false,
         /**
          * Array of album data for the library
          */
         albums: null
      }

      this.OpenPlayer = this.OpenPlayer.bind(this);
      this.ClosePlayer = this.ClosePlayer.bind(this);
      this.ExpandPlayer = this.ExpandPlayer.bind(this);
      this.HideLibrary = this.HideLibrary.bind(this);
      this.AddToQueue = this.AddToQueue.bind(this);
      this.RemoveFromQueue = this.RemoveFromQueue.bind(this);
      this.ChangeVolume = this.ChangeVolume.bind(this);
      this.PlayTrack = this.PlayTrack.bind(this);
      this.PlayTrackAndAddToQueue = this.PlayTrackAndAddToQueue.bind(this);
      this.PlayTrackInQueue = this.PlayTrackInQueue.bind(this);
      this.RewindTrack = this.RewindTrack.bind(this);
      this.SkipToPreviousTrackInQueue = this.SkipToPreviousTrackInQueue.bind(this);
      this.SkipToNextTrackInQueue = this.SkipToNextTrackInQueue.bind(this);
      this.PlayNextTrack = this.PlayNextTrack.bind(this);
      this.ToggleMute = this.ToggleMute.bind(this);
      this.ToggleRepeat = this.ToggleRepeat.bind(this);
      this.ToggleShuffle = this.ToggleShuffle.bind(this);
      this.HandleRewindButton = this.HandleRewindButton.bind(this);
      this.LoadAlbumLibrary = this.LoadAlbumLibrary.bind(this);
   }

   /**
    * Change player state to open
    */
   OpenPlayer() {
      this.setState({
         playerState: PlayerState.OPEN
      });
   }

   /**
    * Change player state to closed
    */
   ClosePlayer() {
      this.setState({
         playerState: PlayerState.CLOSED
      });
   }

   /**
    * Change player state to expanded
    */
   ExpandPlayer() {
      this.setState({
         playerState: PlayerState.EXPANDED
      });
   }

   /**
    * Hide the player library (by changing the player state to open)
    */
   HideLibrary() {
      this.setState({
         playerState: PlayerState.OPEN
      });
   }

   /**
    * Add a track with the given ID to the queue and regenerate the shuffle queue if shuffle mode is on
    */
   async AddToQueue(trackId) {

      // Get the data for the track with the given ID
      const track = await capi.GetTrackById(trackId);

      // Add the track to the queue
      this.setState({
         queue: this.state.queue.concat(track)
      });
      
      // If shuffle mode is on, regenerate the shuffle queue
      if (this.state.isShuffle) {
         this.setState({

            // Generate the shuffled queue order
            shuffleQueue: ShuffleQueueGenerator(this.state.queue.length + 1, this.state.currentTrack),

            // Reset current track in the shuffled queue
            currentShuffleTrack: 0
         });
      }
   }

   /**
    * Remove a track with the given index from the queue
    */
   RemoveFromQueue(trackIndex) {

      // If shuffle mode is on, remove this track for the shuffled queue
      if (this.state.isShuffle) {

         // Make a copy of the shuffled queue to modify it and save it as the new shuffled queue
         let modifiedShuffleQueue = this.state.shuffleQueue;

         // Get the item in the shuffled queue that relates to the track to be removed
         let trackToRemoveIndex = modifiedShuffleQueue.findIndex(item => item == trackIndex);

         // Remove that item from the shuffled queue
         modifiedShuffleQueue.splice(trackToRemoveIndex, 1);

         // Adjust values for the tracks positioned after the removed track
         for (let i = 0; i < modifiedShuffleQueue.length; i++) {
            if (modifiedShuffleQueue[i] > trackIndex) {
               modifiedShuffleQueue[i]--;
            }
         }

         // Save the modified shuffled queue
         this.setState({
            shuffleQueue: modifiedShuffleQueue
         });
      }

      // Make a copy of the queue to modify it and save it as the new queue
      let modifiedQueue = this.state.queue;

      // Remove the track from the queue
      modifiedQueue.splice(trackIndex, 1);

      this.setState({

         // Save the modified queue
         queue: modifiedQueue,

         // Update current queue position
         currentTrack: this.state.currentTrack - 1
      });
   }
   
   /**
    * Change the volume of the player (changes the state for the SoundCloud widget and the control's visual)
    */
   ChangeVolume(vol) {

      // Update state related to volume
      this.setState({
         volume: vol,
         isMuted: false
      });

      // Send the new volume to the SoundCloud widget
      this.state.widget.setVolume(vol);
   }
   
   /**
    * Play the track with given ID (load the track into the SoundCloud widget)
    */
   async PlayTrack(trackId) {

      // Get the track with the given ID
      let trackToPlay = this.state.queue.find(track => track.id == trackId);
      if (!trackToPlay) {
         trackToPlay = await capi.GetTrackById(trackId);
      }

      // Load the track's URL into the SoundCloud widget to play the track
      this.state.widget.load(trackToPlay.track_url, {
         auto_play: true,
         show_artwork: false
      });
   }

   /**
    * Play a track and add it to the queue and unmute the player if muted
    */
   PlayTrackAndAddToQueue(trackId) {
      
      // Play this track
      this.PlayTrack(trackId);

      // Add this track to the queue
      this.AddToQueue(trackId);

      this.setState({

         // If the player is muted, unmute
         isMuted: false,

         // Update the queue position
         currentTrack: this.state.queue.length
      });
   }

   /**
    * Play a track from the queue with the given queue position
    */
   PlayTrackInQueue(trackPosition) {

      // Play specified track
      this.PlayTrack(this.state.queue[trackPosition].id);

      // Update queue position
      this.setState({
         currentTrack: trackPosition
      });

      // If shuffle mode is on, regenerate the shuffle queue
      if (this.state.isShuffle) {
         this.setState({

            // Regenerate shuffle queue
            shuffleQueue: ShuffleQueueGenerator(queue.length, trackPosition),
   
            // Reset current shuffle queue position
            currentShuffleTrack: 0
         });
      }
   }

   /**
    * Rewind to the beginning of the current track
    */
   RewindTrack() {
      
      // Set the seeking position of the SoundCloud widget to the start of the track
      this.state.widget.seekTo(0);

      // Play the track
      this.state.widget.play();
   }

   /**
    * Skip to the previous track in the queue
    */
   SkipToPreviousTrackInQueue() {
      
      // Play the previous track if there is a previous track to play (if the queue is not empty)
      if (this.state.queue.length > 0) {

         // When shuffle mode is on
         if (this.state.isShuffle) {

            // Calculate the previous position in the shuffled queue
            const previousShuffleTrack = (this.state.currentShuffleTrack - 1).mod(this.state.shuffleQueue.length);

            // Play the previous track in the shuffled queue
            this.PlayTrack(this.state.queue[this.state.shuffleQueue[previousShuffleTrack]].id);

            // Update the queue and shuffled queue positions
            this.setState({
               currentTrack: this.state.shuffleQueue[previousShuffleTrack],
               currentShuffleTrack: previousShuffleTrack
            });

         // When shuffle mode is off
         } else {

            // Calculate the previous position in the queue
            const previousTrack = (this.state.currentTrack - 1).mod(this.state.queue.length);

            // Play the previous track in the queue
            this.PlayTrack(this.state.queue[previousTrack].id);

            // Update the queue position
            this.setState({
               currentTrack: previousTrack
            });
         }

      // Otherwise, reset the queue position
      } else {
         this.setState({
            currentTrack: -1
         });
      }
   }

   /**
    * Skip to the next track in the queue
    */
   SkipToNextTrackInQueue() {

      // Play the next track if the queue is not empty
      if (this.state.queue.length > 0) {

         // When shuffle mode is on
         if (this.state.isShuffle) {

            // Calculate the next position in the shuffled queue
            const nextShuffleTrack = (this.state.currentShuffleTrack + 1).mod(this.state.shuffleQueue.length);

            // Play the next track in the shuffled queue
            this.PlayTrack(this.state.queue[this.state.shuffleQueue[nextShuffleTrack]].id);

            // Update the queue and shuffled queue positions
            this.setState({
               currentTrack: this.state.shuffleQueue[nextShuffleTrack],
               currentShuffleTrack: nextShuffleTrack
            });

         // When shuffle mode is off
         } else {

            // Calculate the next position in the queue
            const nextTrack = (this.state.currentTrack + 1).mod(this.state.queue.length);

            // Play the next track in the queue
            this.PlayTrack(this.state.queue[nextTrack].id);

            // Update the queue position
            this.setState({
               currentTrack: nextTrack
            });
         }

      // Otherwise, reset the queue position
      } else {
         this.setState({
            currentTrack: -1
         });
      }
   }

   /**
    * Play the next track in the queue (or repeat the current track if repeat mode is on)
    */
   PlayNextTrack() {
   
      // If repeat mode is on, play the current track again
      if (this.state.isRepeat) {
         this.RewindTrack();

      // Otherwise, play the next track in the queue
      } else {
         this.SkipToNextTrackInQueue();
      }
   }

   /**
    * Toggle whether the player is muted
    */
   ToggleMute() {

      // Toggle player mute state
      this.setState({
         isMuted: !this.state.isMuted
      });

      // Mute or unmute SoundCloud widget
      if (!this.state.isMuted) {
         this.state.widget.setVolume(0);
      } else {
         this.state.widget.setVolume(this.state.volume);
      }
   }

   /**
    * Toggle repeat mode
    */
   ToggleRepeat() {
      this.setState({
         isRepeat: !this.state.isRepeat
      });
   }

   /**
    * Toggle shuffle mode (generate the shuffle queue if shuffle mode is being turned on)
    */
   ToggleShuffle() {
      
      // Turning off shuffle mode
      if (this.state.isShuffle) {

         // Update state relevant to shuffle mode (discarding current shuffle queue)
         this.setState({
            isShuffle: false,
            shuffleQueue: [],
            currentShuffleTrack: -1
         });

      // Turning on shuffle mode
      } else {
         
         // Generate the shuffled queue order
         const newShuffleQueue = ShuffleQueueGenerator(this.state.queue.length, this.state.currentTrack);

         // Update state relevant to shuffle mode
         this.setState({
            isShuffle: true,
            shuffleQueue: newShuffleQueue,
            currentShuffleTrack: 0
         });
      }
   }

   /**
    * Handle the functionality of the rewind button, which will rewind the current track if still playing the beginning of the current track or skip to the previous track otherwise
    */
   HandleRewindButton() {
      
      // Operate on the current seeking position of the track
      this.state.widget.getPosition(position => {

         // If the current position is under the threshold, play the previous track
         if (position < REWIND_OPTION_TIME) {
            this.SkipToPreviousTrackInQueue();
         
         // Otherwise, play the previous track
         } else {
            this.RewindTrack();
         }
      });
   }

   /**
    * Fetch all album data available from WordPress, to use for the album library
    */
   async LoadAlbumLibrary() {
      const albumLibrary = await capi.GetListOfAlbums();
      this.setState({
         albums: albumLibrary
      });
   }

   /**
    * Initialize the queue and the SoundCloud widget when the component mounts
    */
   async componentDidMount() {
      
      // Start the queue with one track already in it
      const firstTrack = await capi.GetFirstTrack();
      this.setState({
         queue: firstTrack
      });

      // Process SoundCloud API script and get its main resulting object
      let SC = SC_API();

      // Hook up SoundCloud widget
      let widgetIframe = document.getElementById('sc-widget');
      let widgetProto = SC.Widget(widgetIframe);

      // Bind player functionality to events from the SoundCloud widget
      // (Binding to the event of the widget being ready so that everything else can be bound once we know it's safe to bind and operate)
      widgetProto.bind(SC.Widget.Events.READY, () => {

         // Get widget's volume and set player state and control to that volume
         widgetProto.getVolume(vol => this.setState({ volume: vol }));

         // Play the next track in the queue
         widgetProto.bind(SC.Widget.Events.FINISH, () => this.PlayNextTrack());

         // Widget's volume gets reset when reloading the widget (loading a new track), so set it again when the track starts to play
         widgetProto.bind(SC.Widget.Events.PLAY, () => this.ChangeVolume(this.state.volume));
      });

      // Update component state
      this.setState({
         currentTrack: 0,
         widget: widgetProto
      });
   }

   //===============//
   //== RENDERING ==//
   //===============//

   render() {
      return (
         <div>
            <PlayerCard
               OpenPlayer={ this.OpenPlayer }
               activeClass={ this.state.playerState == PlayerState.CLOSED ? styles["player-card-active"] : styles["player-card-inactive"] }
            />
            <PlayerBar
               ClosePlayer={ this.ClosePlayer }
               ExpandPlayer={ this.ExpandPlayer }
               HideLibrary={ this.HideLibrary }
               ChangeVolume={ this.ChangeVolume }
               ToggleMute={ this.ToggleMute }
               SkipPrevious={ this.HandleRewindButton }
               SkipNext={ this.SkipToNextTrackInQueue }
               ToggleRepeat={ this.ToggleRepeat }
               ToggleShuffle={ this.ToggleShuffle }
               isPlayerExpanded={ this.state.playerState == PlayerState.EXPANDED }
               activeClass={ this.state.playerState == PlayerState.CLOSED ? styles["player-bar-inactive"] : styles["player-bar-active"] }
               currentVolume={ this.state.volume }
               isMuted={ this.state.isMuted }
               isRepeat={ this.state.isRepeat }
               isShuffle={ this.state.isShuffle }
               currentTrack={ this.state.currentTrack > -1 ? this.state.queue[this.state.currentTrack] : null }
            />
            { this.state.playerState == PlayerState.EXPANDED && <PlayerLibrary
               PlayTrackInQueue={ this.PlayTrackInQueue }
               PlayAndAddToQueue={ this.PlayTrackAndAddToQueue }
               AddToQueue={ this.AddToQueue }
               RemoveFromQueue={ this.RemoveFromQueue }
               LoadAlbumLibrary={ this.LoadAlbumLibrary }
               queue={ this.state.queue }
               currentTrack={ this.state.currentTrack }
               albums={ this.state.albums }
            /> }
         </div>
      );
   }
}