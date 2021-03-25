import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import { getTwitterLink, getWhatsappLink } from '../utils/share'
import { SiteConfig } from '../site.config'
const getPollLink = poll => {
    const host = window.location.origin
    return `${SiteConfig.url || host}/poll/${poll.id}`
}
const buildShareText = poll => {
    const host = window.location.origin
    const optionsText = poll.options.map(option => `- *${option.text}*`).join('\n')
    // Read from environment variable otherwise read the current "origin"
    const pollLink = `${SiteConfig.url || host}/poll/${poll.id}`
    return `${poll.question}\n\n${optionsText}\n\nVote here 👇\n${pollLink}`
}
export const SharePoll = ({ poll }) => {
    const [copied, setCopied] = useState(false)
    if (!poll) return null
    const text = buildShareText(poll)
    return (
    )
}
