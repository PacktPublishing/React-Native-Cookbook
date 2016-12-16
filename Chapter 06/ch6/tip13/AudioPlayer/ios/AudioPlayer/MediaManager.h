//
//  MediaManager.h
//  AudioPlayer
//
//  Created by Stanislav Bershadskiy on 7/21/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <MediaPlayer/MediaPlayer.h>

#import "RCTBridgeModule.h"
#import "RCTEventDispatcher.h"


@interface MediaManager : NSObject<RCTBridgeModule, MPMediaPickerControllerDelegate>

@property (nonatomic, retain) MPMediaPickerController *mediaPicker;
@property (nonatomic, retain) MPMusicPlayerController *musicPlayer;
@end
