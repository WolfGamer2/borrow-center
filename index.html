import ShopComponent from '../../../components/arcade/shop-component'
import { getArcadeUser } from '../../api/arcade/[userAirtableID]'
import { shopParts } from '../../api/arcade/shop'
import { Image, Link, Text, Flex, Button, Box } from 'theme-ui'
import { Balancer } from 'react-wrap-balancer'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import Flag from '../../../components/flag'
/** @jsxImportSource theme-ui */

const styled = `
@import url(https://fonts.googleapis.com/css2?family=Slackey&family=Emblema+One&family=Gaegu&display=swap);

.slackey {
  font-family: "Slackey", sans-serif;
 }

 .gaegu {
  font-family: "Gaegu", sans-serif;
}

body {
  background-color: #FAEFD6;
}

`

export default function Shop({
  availableItems,
  userAirtableID = null,
  userEmail = null,
  hoursBalance = 0
}) {
  const [items, setItems] = useState(availableItems)
  const [cat, setCat] = useState('all')

  const aItems = availableItems.filter(
    items => items['Cost Hours'] > 0 && items['Cost Hours'] <= 10
  )
  const bItems = availableItems.filter(
    items => items['Cost Hours'] > 10 && items['Cost Hours'] <= 50
  )
  const cItems = availableItems.filter(
    items => items['Cost Hours'] > 50 && items['Cost Hours'] <= 100
  )
  const dItems = availableItems.filter(
    items => items['Cost Hours'] > 100
  )

  useEffect(() => {
    if (cat === 'all') {
      setItems(availableItems)
    } else {
      let i = availableItems.filter(items => items['Category'].includes(cat))
      setItems(i)
    }
  }, [cat])

  const spotlightRef = useRef()
  useEffect(() => {
    const handler = event => {
      var rect = document.getElementById('spotlight').getBoundingClientRect()
      var x = event.clientX - rect.left // x position within the element
      var y = event.clientY - rect.top // y position within the element

      spotlightRef.current.style.background = `radial-gradient(
          circle at ${x}px ${y}px,
          rgba(132, 146, 166, 0) 20px,
          rgba(250, 239, 214, 0.9) 120px
        )`
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <Box sx={{ paddingBottom: 4, position: 'relative' }}>
      <Meta
        as={Head}
        title="Arcade Shop"
        description="Redeem prizes at your own Arcade Shop."
        image="https://cloud-luaw423i2-hack-club-bot.vercel.app/0frame_33__1_.png"
      />
      <style>
        {styled}
      </style>
      <Box
        id="spotlight"
        as="section"
        sx={{
          backgroundImage: `
              linear-gradient(rgba(250, 239, 214, 0.7), rgba(250, 239, 214, 0.7)),
              url('https://icons.hackclub.com/api/icons/0xD8A52D/glyph:rep.svg')
            `,
          backgroundSize: '40px 40px',
          backgroundRepeat: 'repeat',
          position: 'relative'
        }}
      >
        <Box
          ref={spotlightRef}
          sx={{
            position: 'absolute',
            zIndex: 2,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: '#FAEFD6',
            pointerEvents: 'none'
          }}
        />
        <Flag sx={{ display: 'block', zIndex: 4, ml: 5 }} />
        <Box
          sx={{
            position: 'relative',
            width: '90vw',
            maxWidth: 'layout',
            margin: 'auto',
            zIndex: 5
          }}
          py={[4, 4, 5]}
        >
          <Balancer className="_title-container">
            <h1
              sx={{
                textAlign: 'center',
                fontSize: 5,
                color: '#FF8C37',
                my: 0,
                display: 'block',
                width: '100%'
              }}
              className="slackey"
            >
              Welcome to the shop
            </h1>
          </Balancer>
          <Text
            sx={{
              display: 'block',
              textAlign: 'center',
              color: '#35290F',
              mt: 0,
              mb: 2
            }}
            className="gaegu"
            variant="subtitle"
          >
            Your current balance is {Math.floor(hoursBalance)} 🎟️
          </Text>
          <Text
            sx={{
              display: 'block',
              textAlign: 'center',
              color: '#35290F',
              mt: 0,
              mb: 2
            }}
            className="gaegu"
            variant="caption"
          >
            The buy button is only available for items where you have enough
            tickets.
          </Text>
          <Flex
            sx={{
              justifyContent: 'center',
              gap: '10px',
              maxWidth: ['100%', '60%', '60%'],
              flexWrap: 'wrap',
              margin: 'auto',
              mb: 4
            }}
          >
            <Button
              variant="outline"
              sx={{ border: '#09AFB4 3px dashed', color: '#09AFB4' }}
              onClick={() => {
                setCat('all')
              }}
            >
              👀 All
            </Button>
            <Button
              variant="outline"
              sx={{ border: '#09AFB4 3px dashed', color: '#09AFB4' }}
              onClick={() => {
                setCat('Software Powerups')
              }}
            >
              🕸️ Software Powerups
            </Button>
            <Button
              variant="outline"
              sx={{ border: '#09AFB4 3px dashed', color: '#09AFB4' }}
              onClick={() => {
                setCat('Art Supplies')
              }}
            >
              🎨 Art Supplies
            </Button>
            <Button
              variant="outline"
              sx={{ border: '#09AFB4 3px dashed', color: '#09AFB4' }}
              onClick={() => {
                setCat('Embedded Devices')
              }}
            >
              🕹️ Embedded Devices
            </Button>
            <Button
              variant="outline"
              sx={{ border: '#09AFB4 3px dashed', color: '#09AFB4' }}
              onClick={() => {
                setCat('Hardware')
              }}
            >
              💻 Hardware
            </Button>
            <Button
              variant="outline"
              sx={{ border: '#09AFB4 3px dashed', color: '#09AFB4' }}
              onClick={() => {
                setCat('Swag')
              }}
            >
              🦢 Swag
            </Button>
          </Flex>
          {cat === 'all' ? (
            <>
              <Text
                sx={{
                  fontSize: [4, 5],
                  color: '#28CCD1',
                  textAlign: 'center',
                  display: 'block'
                }}
                className="gaegu"
              >
                Pixel Prizes: 1-10 🎟️
              </Text>
              <ShopComponent
                availableItems={aItems}
                userAirtableID={userAirtableID}
                userEmail={userEmail}
                hoursBalance={hoursBalance}
              />
              <Text
                sx={{
                  fontSize: [4, 5],
                  color: '#09AFB4',
                  textAlign: 'center',
                  display: 'block'
                }}
                className="gaegu"
              >
                Orpheus Loot: 11-50 🎟️
              </Text>
              <ShopComponent
                availableItems={bItems}
                userAirtableID={userAirtableID}
                userEmail={userEmail}
                hoursBalance={hoursBalance}
              />
              <Text
                sx={{
                  fontSize: [4, 5],
                  color: '#2B8184',
                  textAlign: 'center',
                  display: 'block'
                }}
                className="gaegu"
              >
                Hacker Bounties: 51-100 🎟️
              </Text>
              <ShopComponent
                availableItems={cItems}
                userAirtableID={userAirtableID}
                userEmail={userEmail}
                hoursBalance={hoursBalance}
              />
              <Text
                sx={{
                  fontSize: [4, 5],
                  color: '#1A696B',
                  textAlign: 'center',
                  display: 'block'
                }}
                className="gaegu"
              >
                Ticket Trove: 100+ 🎟️
              </Text>
              <ShopComponent
                availableItems={dItems}
                userAirtableID={userAirtableID}
                userEmail={userEmail}
                hoursBalance={hoursBalance}
              />
            </>
          ) : (
            <ShopComponent
              availableItems={items}
              userAirtableID={userAirtableID}
              userEmail={userEmail}
              hoursBalance={hoursBalance}
            />
          )}
          <Text
            sx={{
              textAlign: 'center',
              color: '#35290F',
              fontSize: 2,
              mt: 2
            }}
          >
            Want to learn how to redeem these prizes?{' '}
            <Link
              sx={{
                color: '#09AFB4',
                textDecoration: 'none',
                borderBottom: '2px solid #09AFB4',
                fontWeight: 'bold'
              }}
              href="/arcade/faqs"
            >
              Head to FAQs.
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export const getStaticProps = async ({ params }) => {
  const user = await getArcadeUser(params.userAirtableID)
  const availableItems = await shopParts()

  return {
    props: {
      availableItems,
      userAirtableID: params.userAirtableID,
      userEmail: user.email || null,
      hoursBalance: user['Total Hours'] || 0
    }
  }
}
