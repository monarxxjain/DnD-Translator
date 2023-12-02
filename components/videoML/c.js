// 'smile'
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose'

export const gestureSmile = new GestureDescription('Smile')

// Thumb
gestureSmile.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
gestureSmile.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25)

// Index
gestureSmile.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
gestureSmile.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.25)

// Middle
gestureSmile.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
gestureSmile.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.25)

// Ring
gestureSmile.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
gestureSmile.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.25)

// Pinky
gestureSmile.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)
gestureSmile.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.25)
