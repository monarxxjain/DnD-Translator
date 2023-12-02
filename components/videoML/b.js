// 'punch'
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose'

export const gesturePunch = new GestureDescription('Punch')

// Thumb
gesturePunch.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
gesturePunch.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5)

// Index
gesturePunch.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)
gesturePunch.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.5)

// Middle
gesturePunch.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
gesturePunch.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.5)

// Ring
gesturePunch.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
gesturePunch.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.5)

// Pinky
gesturePunch.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
gesturePunch.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.5)
