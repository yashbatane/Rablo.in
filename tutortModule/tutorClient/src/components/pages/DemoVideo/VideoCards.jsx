import React from 'react'
import './videoCard.css'

export default function VideoCards() {
    return (
        <div id='videoCard'>

            <div id='videoSection'>
                <iframe
                    src="https://youtube.com/embed/ToNKsAdC3tg"
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>

            <div id='gap'></div>

            <div id='contentSection'>

                <div id='topRow'>

                    <div>
                        <h3>Newton's Laws of Motion</h3>
                    </div>
                    <div id='subjectTags'>

                        <div className='tags'>
                            Physics
                        </div>
                        <div className='tags'>
                            Class 6
                        </div>
                    </div>

                </div>

                <div id='hashtags'>
                    <p>#Physics</p>
                    <p>#NLM</p>
                    <p>#Class 6</p>
                </div>

                <div id='explanation'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
            </div>
        </div>
    )
}
