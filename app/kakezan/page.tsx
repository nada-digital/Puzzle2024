import { Puzzle } from '@/components/Puzzle'
import Image from 'next/image'

const data: { difficulty: number, url: string }[] = [
  { difficulty: 1, url: 'https://opt-pan.github.io/penpa-edit/#m=solve&p=vZO9btswEMd3PUXAmYM+HNfm5qZul9T9ShEEhGDQthILkcyUkppAhgP4MTpnyNQ36NsEKLr1FXJ3VKDQVocOLWSdTz9Sd8fT/YsvlTIJ78EVDbjPA7yG8A/3MMCf31wnaZkl4oCPqnKpDTicv5vwc5UViSebTbEnWcQ4C+AOWXxbj28lPkSxt64/inU9FTLe8Ppz6w5a95NYg52INRsETEiIwPsYK+ZsECGA0E8g8PtIIHZLhkh6TwRCBRTwjOxrsiHZE8jH64jsK7I+2UOyx7RnTPaU7BHZHtk+7XmBFXueDAa2Y/yw+x8bMl5cJAcTbXKVMegDK3Q2LSpzruYJE9Q/TmxV5bPEOCjT+ipLV+6+9GKlTdK5hDCBdEyUpnK2z7RZYPCWX6ssc162o+CgeWrmmYtKkzrPyhh97ZBclUsHzFQJo1Ms0ys3UrIq3QJK5R5fXaqdbHl74o3HbhjdMuRhn4fQ7HU9FPWI12/ssDzNIa8/wJS9FfUEh0wyBh8GvzPNTwjuuHVPaR29IwsDH/xJM2vgnoFr+zI9toHeC1mfcIZ5XtLb6LJcf4VS6TV6nut8BoeR7Fk77EpRLfRl1ewNcHBHttxxR7lRWy66tlz0OsrFU/zjcofxxn4I/68U/h/EedNITZtOtQHuEBzQTmE13GrL5Xs6woT7UgLaoSagu4ICtK8pgHuyAvYHZWHUXXFhVbv6wlR7EsNUz1UmY+/n97tf93cP2/uH7bffP7aP&a=Nc/RDYQwDAPQXfj2R3NQksyC2H8N7HMrVcoTOG3yPC90jhgDMQpxgA66l286l/l/fc8LObfqZ00k09KNdA9LOVexc5JvqRN1bTVflS70yk30aTXa9zHU7lVIQ4tMaWYx0d5CRcOL7Pjv4GV13g8=' },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=zZTNbptAEMfvPEW05z3wYTvAzU3dXlL3K1UUIWStHRKjgDddoImwHMmP0XMOOfUN+jaRqt76CpmZpYW16aGHVhVmNPyYnZld5u/iYyVUwgO4PJ/b3IHL8226/QH+7OY6ScssCQ/4uCqXUoHD+espvxBZkVhRExRbEfMYZw7cLovv6sldhA9ebK3rd+G6noVRvOH1h9b1W/d9uAY7DdfMCVwWRsyHpSPMFkM62ybUIc4Qidsh7gDJoEO8AAlEtmhAuaHNllBQN/VwhCTokEMi3WKHOnVLPN3ir1WwGYe2dEb2BVmX7AnsmNce2edkbbJDsscUMyF7SvaI7IDsiGIO8cwsK3J9+mbda/h/ERyKyfllcjCVKhcZg1lghcxmRaUuxCJhIc0QJ7aq8nmiDJRJeZ2lKzMuvVxJlfS+QphAORaWqjLC51KdY/KW34gsMxZrORhokapFZqJSpcazUEreGCQX5dIAc1GCfIplem1mSlal2UApzO2LK7FTLW93vLHYLaM7crk74i4c9roOwnrM65d6yH9qkddvQWmvwnqKQosYgw+Dk0YT7II7ad1Teo/ekYaODf60mXZwz8DV5zI71onehFF9whnWeUar0WW5/ASt0jJ6Xsh8DpuJWOc49JuiOpdXVRProHTGut1JT7te2y66ul30etrFXfzldoN4oz+E/Uf/cv/g7+G2kZpUvWoD3CM4oL3CarjWlsn3dIQF96UEtEdNQHcFBWhfUwD3ZAXsN8rCrLviwq529YWl9iSGpboqi2Lr25f77w/3j9uHx+3nH1+3Tw==&a=TZRRasQwDETv0u982KM4sc9Sev9r9Gk1KoUFDUP0RgrKfn//XPn7mjuuue9rfl2lz2ONt5c1dbdP3a81dW9r6j7W1DNKZz3TmnpkrUvDfDI13HtgHjPRms3Z6OJoDJ7/pydzf/TEL35WjfYDXTtm1az5M1+zsjJfci+ZknvJlNxLjlTvQTN7/2mZg/fHh63wnLAVtW+yFe6FLbWfnPbpVb2TrLo9GzzdngeebufC0+3nI5+v9/bRy714uj0P9Y8JT8szw9PTz2SvOVQt+1Q9ngG2Hs+/2Gu1j368C55WP8PMq31mfjwz+XqdRb5ec8jR69nI0et9Yetpn97dvcy8vRc85U1/NBzfrd7keIbUvuH05BvOTPmGM1O+Yb3Jbx/te85MHe9IpvwdZWZwo6U32hxyom+VnOhbJSf6VvMbOe0HvpmHXToLHcN7kRn+jjKzszKn+ckOf3dZm5mMGPUeshan/iTy9/ML", difficulty: 2 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=vVPNbptAEL7zFNGe9wCL7Trc3NTtJXX/UkXRCllrh8Qo4E0XaCIsR/Jj9JxDTn2Dvk2kqre+QmZm7eK1qdQeWi18+vhYZmaH+YpPlTIJ78IK+9znASwh+nR3fLw26yQtsyQ64IOqnGkDhPM3I36hsiLx5HpT7EkWMs4CuAWL7+rhncSHMPYW9ftoUY8jGS95/bGh/YZ+iBaAo2jBDgMWSSa6jPcwWAzghyj1tpSggwqk+6WEfVQCsZEgWkAxzwhfEgrCE0jJ65DwBaFP2CU8pj1DwlPCI8IOYY/2PMOiPU8K2zRc3T9j2KXh+WVyMNImVxmD5rBCZ+OiMhdqmrCImspJm1f5JDGOlGl9naVzd196OdcmaX2FYgLpWFSaytk+0eYcgzf6jcoy52M7H440Tc00c6XSpM6zMkbfOEquypkjTFQJ81TM0ms3UjIv3QJK5R5fXamdbHlz4qXHbhndUnDR4wKavagPo3rA61d2WjbDyet3MHqvo3qEkycZgx+Df54GVgAdNvSU3iM7smLgAx9Z3gN6BtT2ZXxsA72NZH3CGeZ5Tl8jZbn+DKXSZ/Q81fkEDiPZVjvsm6I611fVem+Aozyw5Q5byg2bcpHacpG1lIun+MflHsZL+yP8v7L9f7Dr7dpq2rS6DeQWw4Haaqy1br3l6ns+woT7VgK1xU2g7hoKpH1PgbhnK9B+4yyMumsurGrXX5hqz2KYattlMva+f73/8XD/uHp4XH35+W31BA==&a=RZFbDsQgDAPv0m8+cNJ95CxV73+N2sSoEpKHbDJQ9rruoXVgzoFZA8cggxwvg78tZg3cL072nC9j97M2P2b68G+WA/bLEXZqLuyEPHaKw07VgvvF9MXPTF/YL1/YL1/aL0faL0faKUd+zXSknXKknXLsWc2dmzm3+9WbPld5+lyl+0vP2WVi9QUY1Z/EqP5oRvXTMaovp1jv2X+U1v0A", difficulty: 2 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=vZRPbts8EMX3OkXANReWZMuJdmnqfpvUbVoXQUAIBm0rsRDJTCmpCWQkgI/RdRZZfTfobQIU3fUKmRkqkSmrixZoQXAw+ol/Hql5yj+XUsc8gObv8x53oXlBQN3t96n36jZJijQO9/hhWSyVhoTzd2N+LtM8dkQ9KHIE8xlnLnSPRXfV6E7ggx856+pDuK6moYhuefWpSfeb9GO4hjgO18z1XBYKWAKEwfwIgjdsE3+AJNgi/T4SEPBCBjQLFLyQwG+vM/SQDJ4JSHBJyBnFNxQ9ihPQySuf4muKPYoDisc0ZkTxlOIRxT7FgMYM8aSOIzyP7tq0wZ/neOGjxUW8N1Y6kymDe2a5Sqd5qc/lPGYhfR9ObFVms1hbKFXqKk1W9rjkYqV03PkKYQzbsbDQpTV8pvQCF2/4tUxTa7IpNgvNEz1PbVToxHqWWqtri2SyWFpgJgsozXyZXNkrxavCFlBI+/jyUrZ2y5oT3zrshlEXHhiCe3DZ6+ogrE549Z8ps+c659UJVPHbsBpjEQvG4MNgPVDleZCOmvSU3mN2ZKDbg3xcVymkZ5Cae5kem4Xeh6KacIb7vKLZmLJMfQGpNI2e5yqbwWEE27oO8yYvF+qyrMe6WOCHRu6oQ67fyMXUyMWsQy6e4i/LPYhuzYfo/dYf5B+Y+Ka2mtKdbgPcYTigncaqufGWzXd8hBvuWgloh5uAtg0FaNdTAHdsBewXzsJV2+ZCVW1/4VY7FsOttl0mIuf7//c/Hu4fNw+Pm68/v22eAA==&a=VcJBCQAAAIPAQmsk9q/he3DgngE=", difficulty: 2 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=1ZTPbptOEMfvPEW05z0Aa/yHm5u6vaTuP1dRtEIWtkmMAt50gSbCciQ/xu+cQ059g75NpKq33ytkdkCFXeihh1aq8I6HD8PM7LLfzT4XoYyoY6sfG1P4h2vgjHG44yEOu74WcZ5E/gmdFvlWSHAofTunl2GSRRavgwKLE0YocWC4JLgvZ/dc3bDA2pcf/H259HlwoOWnxh037kd/D3bu74nruMTnZELoUCULIBubmMQbKALZGzI0yZCZb40cM2bUyTPGWm0y8QzCbNvIzGzsWYsxMzPHrM6cbgzOop15gLXaMR7macd42OFPAgvp4HJeoH2F1kW7gNWmJUP7Eq2N1kN7hjEztOdoT9EO0A4xZqS+l2VxVu0Y/fL+Paa27WxzFZ3MhUzDhMBuJZlIllkhL8N1RHzc5RTZrkhXkdRQIsRNEu/0uPhqJ2TU+0jBCMoRP5eFFr4ScqOSN/w2TBLt5Uq0GlrHcp3oKJexdh9KKW41kob5VgOrMAeBZ9v4Rs8U7XK9gTzUpx9eh0a1tJnxwSJ3BAd3qQsnCiz2vpz45ZSWr2HDtk4LWr6Hs+CNX87VUcAJgQ+j9iPufBfcWeOe43PlnVbQscGf1yoB9wLcal2WZ1Widz4vF5SoOi/wbeWSVHyBVvE1vF+LdAWT4aS1HNWTrNiI66KOdZTAplW7s552WdOucqt2ldfTrprFH253EhyqD2H/1jn8Fw6Ru1pqQvaqDXCP4ID2CqvmlbZ03tGRKtiVEtAeNQE1BQWoqymAHVkB+4WyVFZTXKorU1+qVEdiqlRbZTywvn99+PH48HR8fDr+9/+34zM=&a=PZRbisRADAPvst/zkcjdeZxl2ftfY8vTlcCAhLElObTn9/fv07+f7Plkr8/+81k8h7yoD/mAT/mEPz0H/JSf8Et+wW/5jea2OJjs8v2TUhPPRB0wUQdM1AFT6oApdcBU5OQvdwFT5gcz1MQzQ81Cczya8OkstQz1wQz1wYynB/2hPpjhLmCG3wfMcC/wzYB/DnXwzFQHzGHPRGeq0/wwM7WcZp58n/nU4ac5qeVU/2CXw12an3pRy2E/+ObB//XCJ6ezYC53xCeX2fDJ5Y5o53x6yHypc/WsXs1ve6jl0hfMZTbw9cKnNvfFJ5ffB6zt0WTf2x6wNnXwyW1OsPanB51bHXjt7kgtt5nBx7e2/fX6cm+hfWp7+KS+ZmtjVq8vz9qxfYobWzzUV7bi1spb+3JvoWvlLbRneQvF3ZV39+XeRdfKG2x88+BfZX9aR9/mvPvFmfXNt+frhXb5zlujpj3MlbfTWL7h1ije6+Lk511+OXM13R0sb63xnWWufPONNc0MLp31p9W/v38=", difficulty: 3 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=1ZTNbptAEMfvPEW05z0Ai23MLU3dXlL3K1UUIRRhhyQo4E3X0ERYiZTH6DmHnPoGfZtIVW99hczM0rKL6aGHVqrwjocfw87ssP9df6xTlXHPxZ8IOfzDFXghDT8c03Db6yCviiza4bt1dS4VOJy/nvPTtFhnTtwGJU7MBOPMg+Gz5LaZ3cZ4IxJn07yLNs1xFCc3vPnQuWHnvo82YOfRhvmez6KYTRgf42QJzOaNkIxMMkbiG8R3kUC+jkz6McJDEhgkmCKBsn+RCeUyY8KgHxNSdjPXlGY2c01pZiNG6JpN4lMu4y0hRJ8ERIzsYkT9sUi/G2JsrxRa61GDj8i+IOuTPYD+80aQfU7WJTsiu08xM7KHZPfIBmTHFDPBL+g4sdB7yL5G/x/DjTw7Oct25lKVacFg/7K1LI7XtTpNlxmLaN9zYqu6XGTKQoWUl0W+suPys5VU2eAjhBmkY1Glait8IdUJTt7xq7QorJe1jC20zNWysFGlcus+VUpeWaRMq3MLLNIKJL8+zy/tmbJVZRdQpfby04u0l63sVnzjsGtGI/a5D2cMNHvTTKNmlzcv9ab+eX7w5i2cDq+iZo6HQ8wYfBjcj6QgH9xZ5x7Sc/T2NPRc8Oet2sA9Alf35XhfT/QmipsDzjDPM3obXVbKT1AqvUb3S1kuYDExM9qhn6zrE3lRt7EeCmxXlzsbKFd05aKry0VvoFxcxV8ud5rc6A/h/tHJ/A8OketWalINqg3wgOCADgqr5VpbNt/SESbclhLQATUB7QsK0LamAG7JCthvlIWz9sWFVfX1ham2JIapTJXFifPty/33h/vHu4fHu88/vt49AQ==&a=TZRbbuQwDATvku/5sNny6yxB7n+NFFclbwADbBB0F+VRz/f3z6efr9r3T+312b8+U9ehLvSpHsysPrpu9YF+1Ccz13+dTX3RX/M3/cV6eHfNoJOp6VWGGv/ozy41nC881w6tx67GZ+gDv2KfWsP94b8sOJXVhzVkwazDGZh1uA+cOpyHU4fnxbsO3x295+qjT3emV8OdqS8LTp3Ow6nTGTh1+P2pdekDsy7PBbMu94RTp31qnX5nap1rBtYlC2bda5597jXfnrJa374Ls27PDrNufS72vNyz9e256L0sOPX4Lpx6nMe7njXD2Zd/68fvcOOzWOhs7gYnm7s9nP3xLOhs/l70sukJP5u7wc+uD/xw76e+0X6Hp/3XDHqfrGztOWf+aXPRvXDvp867Q/PD/Z4an9IH/uI2M2atOSFjUw/68zs0J2atOTFrXeM9D/l6Wa3NWjNTelJjxrvGfDU/ZGlqPBcXZsxUc2KO2jvmqGu880lz9Wx9uAPZyfijzVH34j1vToZ7UnO4A8yYr+bEe97eMaddY067vv54x5x2fT3xi9nsOj3nn2I/P78=", difficulty: 3 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=vVRLbtswEN3rFAHXXOjjyLZ2bup2k7o/F0FACAZtK7EQyUwpqQlkOICP0XUWWfUGvU2AorteITMjBzIldVGgLWg9PD6NhkNynrPPhdQR78PwBtzmDgzP7tHj2/h7HtM4T6LgiI+KfKU0EM7fTviFTLLIEvug0BLMY5w58LgsvCvHdwInXmhtyg/BppwFItzy8lNNBzX9GGwAJ8GGOd6QBYL5jPuYLATo+ag47oE0cJpBw7bSTORCiqbSN1NDEQ6Vck74itAlnEKlvPQIXxLahMeEpxQzJjwjPCHsEfoU08e9WpZwe3TWz+P478/wMsbLy+hoonQqEwZ3wDKVzLJCX8hFxAK6O07aukjnkTakRKnrJF6bcfHlWumo8xWKESzHglwXRvhc6SUmr/UbmSTGx1UbGtIi1ovElHIdG3OptboxlFTmK0OYyxzaNlvF12amaJ2bBeTS3L68ko3V0nrHW4vdMnqEy12fu3DYm3IYlCNevoZeOvAAL99Dh78Jygk2uGAMLgY7hXzhAh3X9IzeIzupRMcGPqm4D/QcaHUus9Mq0btAlFPOcJ0X9DVSlqovUCp9RvOFSuewGcEOjqN6kxVLdVXsYx1s/VFV7rijXK8uF2lVLrKOcnEX/7jcYbitLsL+o3+X/2Dv273VlO50G8gdhgO101h7vfKWqbd8hAu2rQRqh5tAbRoKpLanQGzZCrTfOAuzNs2FVTX9hUu1LIZLHbpMhNaPb/c/H+4fdw+Pu6+/vu+eAA==&a=PZLbqQQxDEN7me98xHZermXY/tsY6Vq5MHAEKx/HsO/7a/wei2gWo9nTKo+bwZjKYCxlMLYyGEcZjFQGZ69M35RnYHZolnneDA55yCkPHdOUweXK8C29h46lWc5t7WV3456/jO7WLna3/Owe+dk9up3dIye7KSe7R28gj/xkapaO1L10pHbB4V27Ekx5kL3fDKac5HXC5133wue93kO6lZNut/LQ51YezrnV7ez+d/C7W/lJt3oz6Va7yJqtPwu/3wc=", difficulty: 3 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=vVS9btswEN71FAFnDpZkyw43N3W7pO6fiyAgBIO2lViIZKaU1AQ0HMCP0TlDpr5B3yZA0a2vkONRhUxbHVKgBcEPnz4deUfqPhWfK6ESGsEIB7RDfRhBFOH0u12cnXpM0jJL2BEdVuVSKiCUvh3TC5EVicfroNjjJCSU+DADEt/p0R03D2HsrfUHttZTxuMN1Z8aOmjoR7YGHLM18f2IMA5bQGGwPgYIA6P4joRBgx2l191f1kcFamqUvrsRpPQx8TniK8QAcQJ1UR0ivkTsIPYQTzFmhHiGeILYRYwwpm9O5nk8CPBu7ej9PTcXPFpcJkdjqXKREbhXUshsWlTqQswTwvB7UNRWVT5LlCNlUl5n6cqNSy9XUiWtr4yYQDrCSlU54TOpFmbzRr8RWeYsts3lSPNUzTNXKlXqPAul5I2j5KJcOsJMlNCKxTK9dndKVqVbQCnc44srsZctb0688cgtwckDMAAN4LLX+pjpIdWvbQ/97muq30PXvmF6bJqWEwIfxvQD9noAdNTQM3xv2IkV/Q7wseUR0HOg9l6mp3ajd4zrCSUmzwtcbSjJ5RcoFZfh81zmMzgMJzvXYd8U1UJeVXWsbxp8aMsdtZQbNuUaass1rKVcc4p/XO5xvLEfovOsP8Z/MPFtbTWpWt0GcovhQG01Vq1bb7n6gY9MwkMrgdriJlD3DQXSoadAPLAVaH9wltl131ymqn1/mVQHFjOpdl3GY+/Ht/ufD/eP24fH7ddf37dP&a=RZFRCsAgDEPvsm9/tNYeZuz+11ieiwwsCaF5Hey+n8a7el+t92r9ap8fmu2VDedk4ZwsnMeQj99PzfbKYtpLI+2lhwNjmkMv3Z3qTnfxaT5Znly9dJfecpfd5X1203fR9F10HS/GMmf1n4MvzfYwfRet48U8HHz5FrwyE0aZiZa/DT0cemUOurvfz+E9Lw==", difficulty: 3 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=1ZTNbptAEMfvPEW05z3wYTs2Nzd1e0ndL1dRtELW2iYxCnjTBZoIy5H8GD3nkFPfoG8Tqeqtr5CZARUv0EMPqVThHQ8/Zmdnlv2Tfs6lDrlj488bcviHq+cMabjDAQ27umZRFof+ER/n2VppcDh/O+UXMk5DS1RBgSWYxzhzYLgsuCsmdwJvvMDaFh/8bTH3RbDjxafaHdbuR38Ldupvmes4zBdsxPgAkwWQzek1idcivRbp95FABb/JMcUckqHbnDUaNIjn2U3Sa8X0PYNAKw41dE72FVmX7Az65YVH9iVZm2yf7CnFTMiekT0h2yM7oJhj3DHLEl75zsyr//8xPDiT1WV4NFU6kTGD88JSFc/TXF/IZch8Omec2CZPFqE2UKzUdRxtzLjocqN02PkIYQjLMT/TuRG+UHqFyWt+I+PYmFzKxkDLSC9jE2U6Mu6l1urGIInM1gZYyAwklq6jazNTuMnMAjJpti+vZGO1pO54Z7FbRkO43AVNw2Zvi5FfjHnxGg7sgV558R7U+MYvpihGwRi8GDyPpBcX3EntntFz9E5K6NjgTyttgXsObrkv89My0TtfFDPOcJ0XNBtdlqgvUCpNo/ulShbQjGAH21E+SfOVusqrWAcFNi7LnXSU69XloluWi15HudjFM5c7Cnbli7D/6kv4Dz4it5XUlO5UG+AOwQHtFFbFS22ZvKUjXLAtJaAdagLaFBSgtqYAtmQF7A/KwqxNcWFVTX3hUi2J4VKHKhOB9ePb/c+H+8f9w+P+66/v+yc=&a=PZRbbsQwDAPvst/5iMn4kbMUvf81OqrpBRYQYUhDOpD35+f3qt9HrV1qutrn2lo9WugR/dBzztFa0Z3z0zPQM3pectsanvxG0/Pc0QsdX3rlo/G1o41+ovF94gtPPT3w1NMDTz15nupP5tI9s5zpOT2VJ5mpGsmMj0by4KORHnw0wulwjlfpkTvio5nZQbbDLD2TE7ZmZmFrnR5m15nljjPfiqqZHqpW7oWPVjiwNc85eVby4KOZ/FS94eCpN/14auV7UrWSk/r1wkcrHKpWvgPVdzLj6TscfHxnFh/fyfPCecNBu+WOnOkNk6r39MNsm1k+zr6Vj++ds6rbni1Ptz1bnlZm8bHSz547O/+vs/N19vXCx97Ziu3sZ7Gd/Sy2ve9SbDsZ4Dk7b0345xz97O9fZ9bpKWa88HH2s3yc/SyfLx+2s//Fc95RVWcn/dRs7lu6h8OZ8y6qfr3wcXa12M6bqmr2e2v6Dx+e86aquucuVLPr/5q6mfvPpn6/fw==", difficulty: 3 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=vZS/bts+EMd3PUXAmYP+2IqtzU3dLqn7a5siCAjBoG0lFiKZKSU1gQwH8GN0zpCpb/B7mwBFt75C7k5yZcrq0KEBwcPxo/Pd8c/X2ZdC6ogPYHgDbnMHhtdzabr2kKZdj7M4T6LgiI+KfKk0OJy/n/BLmWSRJeqg0BLMY5w5MF0W3pfje4ELL7TW5cdgXU4DEW54+blxB437KViDnQRr5vhDFgh2zLiPyUIwAw+Jv08oBrLvCHSLZLhHnAESaOk3cV0k7j7pt2N6Tjtzr9eO6VOt/o5A4w61f0H2DVmX7Bnsjpce2ddkbbJ9sqcUMyZ7TvaEbI+sTzHHeD6WJVyfbqgZ/Zdd4/WOF1fR0UTpVCYMbpVlKplmhb6U84gF9Bo4sVWRziJtoESpmyRemXHx1UrpqPMTwgjKsSDXhRE+U3qByRt+K5PE+HH1tA00j/U8MVGuY2MttVa3BkllvjTATOYghGwZ35iZolVuNpBLc/vyWraqpc2ONxa7YzQFSM/nLhz2uhwG5YiXb6unt1MVLz+AZt4F5QQlIxiDi8F3RC/WBXfcuOf0Hb2TCjo2+JP6dYN7AW51LtPTKtF/gSjPOMM6r+jX6LJUfYVW6We0nqt0BpsRbO84qi9ZsVDXRR3roDBGVbvjjna9pl10q3bR62gXd/GP2x2Gm+oi7L/6v3oB8d/VUlO6U22AOwQHtFNYNa+0ZfIDHWHBQykB7VAT0LagAB1qCuCBrID9QVmYtS0u7KqtLyx1IDEsta8yEVo/vj/8fHx42j4+bb/9+n/7DA==&a=TZJRrgMhDAPv8r75AAMLnKXq/a/RyYupKq1kCyUTJ9rX613i+2vPKW3V0v5K+t3Sx9u6Hl2yR1e3R9ewR9e0R9djj+6dPtjbnNDj3g1n//hjTrzt69FtZui5THST+9+fourMsFVdD0912VN/XI+q5u6htzf61JIffarX7yLdenrbj5d7eVO7vuFz31Apdwy2WmYIVXc9bHXXw1PPO0vR++O7Obyp532CLV3Pvj33lYLvnOGHZ/H2nctMDTOZqWEOczTyhjFH/XruM3wT5mh4F9gazo9qmgn7y4Sn4Wyo5u3lJo9zwtPjbDA03YtqOgOqaQ6q6TzolwkvOfmzx/f+AA==", difficulty: 3 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=1ZTPbptOEMfvPEW05z2YP3YwNzd1f5fU/ZcqihCy1jaJUcCb3wJNhOVIfoyec8ipb9C3iVT11lfIzKwrWKCHHlqpwjsePszOzC77Jf+/FCrm9gB/rs/hHy7P9mk4/ojG4HCdJUUaB0d8UhZrqcDh/M2MX4o0j63wEBRZIXMZZzYMh0X31fQ+xBs3srbV+2BbzYMw2vHqY+36tfsh2IKdBVvm2C4LQuYzPsJkEWTzjpHYwyYaI3IaZEjEaxDfpmnNoDGhRm7XJgKN18RppXY7HbnOqD3L89oxuqG6PKzPplVekH1F1iF7BpvAK5fsS7IDskOypxQzJXtO9oSsR3ZEMce4jZYVuvpFmtfw32N4mqarq/hoJlUmUgaHiOUyneeluhTLmAV0+DixTZktYmWgVMqbNNmYccnVRqq49xHCGMqxoFClEb6QaoXJa34r0tSYrLVkoGWilqmJCpUY90IpeWuQTBRrAyxEAbrL18mNmSneFGYDhTCXL65Fq1pWr3hnsTtGI3S4A0KHzd5W46Ca8Oo/fap/iphX70Cir4NqhgoNGYMXg+eRhO2AO63dc3qO3omG9gD8mfZH4F6Aq/dlfqoTvQ3C6owzrPOCZqPLMvkJWqVpdL+U2QIWE7LGdugnebmS1+Uh1kaBTXS705523bpddHW76PW0i6v4w+2Oo51+EYPf+jz+hY/I3UFqUvWqDXCP4ID2CuvAtbZM3tERFuxKCWiPmoC2BQWoqymAHVkB+4WyMGtbXNhVW19YqiMxLNVUWRhZ3748fH98eNo/Pu0///i6fwY=&a=PZTRCcMwEEN36Xc+EslOnFlK91+juvg5EJAw56dzEf1+f1t9Hx3edLTt+GzT68K3nHd8jz/xZ/yaueIHfsTf+DucffqodOCPTYapMAWzvLmbs3cHhal1Ht+ED9/wozL8qMxMVDY+7zJvjKqxc3ZRg598deaTo7Z87jbuRtXYP6rG/lE1do7qZJ/kvPywdTLTM9PZofzFfM7U13z2udghPF3khqHBfO5pcJ5ZDfiZ1YCTWQ1+k6gGzKgG74rqZp/wdK+7lbXOx+Z9cbLbze8f1c0+Ue/sE54P5sNzulW+GKZL3p35ucPj6VWdmV4Vz/TKR/gwH5/eTF934URNb0tNfyrTdKZyTGcqx3Smckxnim066XTSdPLxDU7OnF5OH87KSo7pTOWYzlSO6UzlmM5Ujulesd3YLerO3XTSdPLxHU7O3qzkmP5UzssP252Z6MsMw+nf9HkLnSydnPknUd/vDw==", difficulty: 3 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=1ZTNbptAEMfvPEW05z2wLCaYm5u6vaTuV6ooQsjCNolRwJsu0ERYjuTH6DmHnPoGfZtIVW99hcwOJLBADz20UoUZDz9mZ4fd/U/2uQhlRJmpftyl8A+XzVy8LdfB26yvkzhPIu+ATop8LSQ4lL6d0fMwySLDr4MCwyecUMLgtkhwW05vffXAA2NbfvC25dzzgx0tPzWu27gfvS3YmbclFrOI50MK6qhkAWRjjiJOi1iHikD2Z8JH3VF2L4/tdskICZT9TBzWncvBGLtFXIxhZhvZ3URuL/UYh7UIN3FUKzVnGNMqkbNuZm71RnGzO4rjArVH2bhAbTLqLit3MI/7RGBHGO7LGdpXaC20J7BttORoX6I10Y7QHmPMFO0p2iO0NloHYw7VxhuGz6ujp1+j/4+p8z9dXUQHMyHTMCFw7EkmknlWyPNwGREP5UKRbYp0EUkNJUJcJfFGj4svNkJGg68UjGA64uWy0MIXQq5U8oZfh0miDa7Ur6FlLJeJjnIZa8+hlOJaI2mYrzWwCHPoFNk6vtIzRZtcLyAP9c8PL8PObGnzxTuD3BC8fYta0Jpgsbfl2CsntHxdHeqntkPL99BU3njlTPUUnxDYGHUesVlY4E4b9xTfK++ogswEf1Y3FnDPwK3WZX5cJXrn+eUJJWqeFzhauSQVX6BUHIbPS5Eu4GN80lqO6k1WrMRlUccyJbBJVe50oFzelKvcqlzlDZSrvuIvlzsOdtVGmH/U0P9BE7mppSbkoNoADwgO6KCwal5pS+c9HakJ+1ICOqAmoF1BAeprCmBPVsB+oyyVtSsuVVVXX2qqnsTUVG2V+YHx49vdz/u7h/39w/7rr+/7Rw==&a=TZRRrgMhDAPv0u/9WGJY4CxV73+NTorhPalSrCiMzYr0/f5c+XtFKVeUuMrrWjqadaAfazFT/3R060p/zzf0nn+u0L00vNC0pl93v8MZ1oO+M3Auqr2El/7pal96IftSo5qPTzQtjU/UYs29Nr8mx8zUzUzY8ez5zGNm6sdnYcfj+UaG5gypH9+FXjR/B+rhNzjNzNR9M8n8+JtQTwY8o5uDZ4zdzzzmUKP7LDW6Z6iH38nWnTP1cE56hw87huepMfwNqTGdf+RZc1JPc+jF2BzuO/Z8v3Q7D54xnJka05mpMT1D1W3+hDnNROv2WXoq+yx83uvS8OeemfRX/vSX36fugLP7aL/V7KmszLrryfDTZd0x/RU+i79ivZ/0l3cnq7wv6S/vS1b5nWcWxcqZ/vKOpL+07pKekpl4Ss6Gp7ybWY8XbPltJ/sw4al6Hp6q5+FJzkNV81l2R97Nn/YeZU+876Xh+G2LHTr81LzppbmX33OyDweGvC9ZD4dz8l5kXWfXn1P+Pl8=", difficulty: 3 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=1ZTBbptMEMfvPEW05z0AizHm5i91e0ndr22qKELIwjaJUcCbLtBEWI7kx+g5h5z6Bn2bSFVvfYXMDjSwCz300EoVZjz8mJ2ZZfe/+ccyEjG1TPljHoV/uBzLw9v2XLzN5jpNijT2j+i0LDZcgEPpmzm9iNI8NoImKDQCwgglFtw2Ce+q2V0gH1ho7Kp3/q5a+EG4p9WH1vVa972/Azv3d8S2LOIHxCHUlclCyGaNJIHkLXF7ZCwJ1HsmNsZ0CWM6cTDG7ZAR1rK7BGMUMtFHudhzN/PY1kd5nj6viZ6ZmXp1ZmKtzkyZ5egxFmbu9MNsnGmnFmOmPsrBnp8zw+e3cBHO0b5Ea6M9hTWiFUP7Aq2JdoT2BGNmaM/QHqN10LoYM5arbBgBq/eZeo3+PSY3+2x9GR/NuciilMAeJzlPF3kpLqJVTHzUBkW2LbNlLBSUcn6dJls1LrncchEPvpIwhnLEL0SphC+5WMvkLb+J0lQZXEtdQatErFIVFSJRniMh+I1CsqjYKGAZFXAs5JvkWs0Ubwu1gSJSpx9dRVq1rJ3x3iC3BO/ApjacQ/Cxd9XEr6a0elVv2J9nDK3ewgny2q/m8gAJCIGFkfsRlWiDO2vdM3wvveMaWib480a14J6DW3+XxUmd6H8/qE4pkXX+w9HSJRn/BK3iMHxe8WwJkwlI53PUb/Jyza/KJtaSApvW7c4G2mVtu9Kt25XeQLtyFn+43Um4rxfC/K3T+y8cIreN1LgYVBvgAcEBHRRWw2ttqbynI1mwLyWgA2oCqgsKUF9TAHuyAvYLZcmsurhkV7q+ZKmexGSprsqC0Pj25f77w/3j4eHx8PnH18MT&a=RZRRbsQgEEPv0u/9SMYkwFmq3v8afS6GSiuNhYZnZzfe7++fjz9fdd+fuutzf32Wrie60G90Y2efo2tEP+gZ/bLT/7Wu6I6+owc7ex+t7TvRWroumNm3Vosmm5KBjKVwyFgVX2a1fRd+C5+M1cInV7UwyXUy4H+88KkWPj715C7sw4RXT3zh1ZPvpJGn7XP0m++Bs2p7x9nCh11v9h9z8ozWb/Y5q3fvw9y+1j18/OvZO2TuyYx/9TzXS/43+a17vDirnt+aLMcXzxrh4FMjnO674ViPcDirEQ7+NZIT/+OFT/V9jtfM7zV8N17WMxw8Dx+2rjwvbF37Ls8+8uxoXcnGWc3sM3UlP566wsSnZvIwa+bZmdq9mPPf1/peOe2v9MKe4r1fuh2+Lu+vu3+6cpcz0belzVleZouOLQ0nXbOP0jX7KF3zFF1amsx5n+2jCoep9NpT6bWn0h1PpTv2VN5zeyrdEd1Ruvyn0yOfqYWPv3jvl3aeZLZ+wuRMLd8J8/jiebxgK50yW3m3zVY6ZZ7STU/RmaV9N3mYoidLczfd8Tx82Iu5/hT9+fkF", difficulty: 3 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=zZTPbptOEMfvPEW05z3A4j94b25+bi+p+2vrKooQstY2iVHAmy7QRFiJ5MfoOYec+gZ9m0hVb32FzA6ksEAPPbSqMKPxh2Fmdpnvph9zoUI6gcv1qE0duFzPxtsb6J9dXYsoi0N+RKd5tpUKHErfzOm5iNPQ8qugwPKJSyhx4GYkuCtmdz4ZEOoG1r54x/fFkvvBLS0+1K5Xu+/5Huyc74njDQnHVCOdLAAzcTSBxDUZtQiz7Q5x28RhmrAmGXRisLoRM27HMKzejHGRNHpmA6xlEKzVfGuIPTdjxl47xmv37Nrt3XDLlf7MAxvp4HaeoX2JlqFdwG7TwkX7H1ob7RDtCcbM0J6iPUY7QDvCmLH+XpblMw/npXkN/y2iB3K2uQiP5lIlIiYwhySV8TLN1blYh4Tj/FJkuzxZhcpAsZRXcbQz46KLnVRh7yMNQyhHeKZyI3wl1UYnr/m1iGPj5VKKBlpHah2bKFOR8V8oJa8Nkohsa4CVyEC66Ta6MjOFu8xsIBPm8sWlaFVL6hXfWuSG4O0zykaUwWbviwkvprR4VY7i8zlAi7eg8te8mGuR+4TAh9GThhPMwJ3V7ik+195xCR0b/Hk17eCegVvuy/KkTPQ/94sFJbrOC3xbuySRn6BVfA3/r2WygsX4pLEd5ZM038jLvIp1tHSmZbuznnbdql081Z7b1V5Pu3oVf7jdSXBbfgj7t07Yv3A83FRSk6pXbYB7BAe0V1gVL7Vl8o6OdMGulID2qAloW1CAupoC2JEVsF8oS2dti0t31daXLtWRmC7VVJkfWN++3H9/uH88PDwePv/4engC&a=TZNdCsMwDIPvsuc+JMr/Wcbuf41JtdwNChbC+WSH9P3+XPpedfer7nHV1xX6LGt6Z1tP9qRPfY71ulCKNb3z0ygITQ+lWVf2pF/pM+/WoPYMR3xnUaM4i7Og8vytya/BUT5K+KqowVQ+ajCVn1nKQY29xEaNmVWBmFM5gPuZg5o+OeB8t+4/fuU9JFO6mQmeTaZ0cz/ZQGrOk0xwnucsdfeOPIfmHlb0uBM09bhferifHrrvhPXhdM7fvZf0MJMeRty52JjuH+QMc6Snd6GHaQ4zMdIXM30xvSPrk8UcLM/MHCz3kI3lHrIx0+fZmT53n56TFTs5fBvTdyK9PTO9J2uRmVnSfs/KhN7urXl2/Wm911uTk1lkY/t+WHHMJK/5X8DWDOZQt3yf+heSSd38X+Bw9+N7o27F+9JrxXMyp5V4Y8pJphjNb1u1+T9STY4YcTZ+en2fLw==", difficulty: 3 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=1ZTNbpwwEMfvPEXksw+AF8JyS9NtL+n2K1UUIRSxG5KgwDr1QhOxSqR9jJ5zyKlv0LeJVPXWV8jMmBYM9NBDK1Uss8MPzwe2/15/rBKVcsfGnwg4/MM1cQK63cCn226uw6zM03CH71XlhVTgcP56zs+SfJ1aUTMotiImGGcO3C6L7+rZXYQPIrY29btwU5+EUXzL6w+tG7Tu+3ADdh5umOu4LIwgBfcxWQzZXBsJ8BYJpz9oIpBMO8Tz+2N8ioKmfpFdinK8DgoG9ae6fpdQ6g4RNkUZxOvlEU6/vHB3kfgdIqhWN0oE/agJRXWJR5k7Hy88qg4LoglMrkNTfEz2BVmX7CGsAK8F2edkbbIe2QMaMyN7RHaf7ISsT2N2cQ0tKxJ6F5mX9/8x3Mqz0/N0Zy5VkeQMdjBby/xkXamzZJmykHY+J7aqikWqDJRLeZVnK3Ncdr6SKh19hTCFciwsVWUMX0h1islbfp3kuRGshWygZaaWuYlKlRnPiVLy2iBFUl4YYJGUIPr1RXZlZkpXpdlAmZifn1wmvWpF+8W3FrthdEcud+GUgcne1NOw3uP1S71hf54gvH4L58OrsJ7j8RAxBguD+5F2vgvurHWP6D16+xo6NvjzRiXgHoOr5+XkQCd6E0b1IWdY5xlFo8sK+QlapTB6XspiAR8Tsc506Dfr6lReVs1YBwW2p9udjbQr2nbR1e2iN9IufsVfbnca3+qFsP/obP4Hh8hNIzWpRtUGeERwQEeF1XCtLZMPdIQFh1ICOqImoH1BARpqCuBAVsB+oyzM2hcXdtXXF5YaSAxLdVUWxda3L/ffH+4ftw+P288/vm6fAA==&a=RZRbjkMhDEP3Mt/9uMQ81zKa/W9jTorhSpWwouBj2qS/v3+f/PxEiU8UfcrPZ+vo1qJerSv1ad2pj1frsR7UT89EL+vFXfdwhuwZ7WWllvvhRBzN3eOvgo5X12ZN5mofvKM6A37R/K4Kt5ZXN2egFtWenFFPP29vfiOcaM4DJ+qp895+PMnc7QMzunvgRHeelj7Ombrbk1oMvxFmDHs2PA839bA/zMuCE9P9cK4nfjH9Rvxi+rvCI6YzDHKO04Oezkwtxukn5zj95FzOCTOWe2Z6+ntLvdxP7WaAf7lw9Djz5De6nou6ffDW47fgF8vZOFV8d2W/76b2DGdNntvkqOyceuL6fzWzu3WlfnrQnuGsyTOcWRS+W9J/Z/jqMAu+YudMvrwvyZfnOZny7uR5WXAk+8OR3IO32I2t08eZOS8LjjzDyZFnWOyN2JOrq3NSk3dH7M7lpvYeJV/t3MXfu/nVzSxq8n6JnZL366u9X1kTs751+p9+3sVMb827POfJl/crT3m/Msvlwrz+eMs7lae8s3lef7zV95zkuT33n19+/v4B", difficulty: 4 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=1ZTPbptAEMbvPEW05z0YsDHm5qZuL6n7L1UUIWStbRKjgDddoImwHMmP0XMOOfUN+jaRqt76CpmZdQRr6KGHVqrwjocfszOzy37kn0uhYm738Of6HP7h6ts+Dcf3aPT212lSpHFwxMdlsZIKHM7fTvmFSPPYCvdBkRUyl3Fmw3BYdFdN7kK8cSNrU30INtUsCKMtrz7Vrl+7H4MN2GmwYY49YAGl8jBZBNn6NhLbaaDBqIWGFNWcNxwiacb4rRifYpqJXJeC/Cahak0yoJh+g3hEvGcCq7FpTedkX5F1yJ7Cknnlkn1Jtkd2QPaEYiZkz8gek+2T9ShmiJtmWaGrX5t5Df4/hmdnsryMj6ZSZSJlcGRYLtNZXqoLsYhZQEeNE1uX2TxWBkqlvE6TtRmXXK6lijsfIYyhHAsKVRrhc6mWmLzmNyJNjclaOQZaJGqRmqhQiXEvlJI3BslEsTLAXBSgsnyVXJuZ4nVhNlAIc/niShxUy+oVby12y2iEDndA1rDZm2oUVGNevdZaeJYsr96DIN8E1RT1GDIGLwbPI8nYAXdSu2f0HL1jDe0e+FPte+Ceg6v3ZXaiE70LwuqUM6zzgmajyzL5BVqlaXS/kNkcFhOyxnboJ3m5lFflPtZGgY11u5OOdt26XXR1u+h1tIur+MvtjqKtfhG9P/oY/oOPyO1ealJ1qg1wh+CAdgprz7W2TN7SERZsSwloh5qAHgoKUFtTAFuyAvYbZWHWQ3FhV4f6wlItiWGppsrCyPrx7f7nw/3j7uFx9/XX990T&a=RZPbDcJQDEN34bsfbXxfnQWx/xqccJ0iVYqVOicGwvv9OfJ5xRVHXDqu17F1DGvRb9YN3a07ntt60J9/rdN6oq+t4UVzn7nHw/toZop+eVJ352npib/u9tOLVh5yNuekRl/W5OzOCS+Gc8KIUX1ylj/1dGbmYjgPNYb71BjOQ43hDNSY5rMnVvnhLHtgx/QsNWb1c9b5qbGcZ5Jz+rdIvZyZ3rOLPbHMpMZtPzvjLk8y/b2lvs2nF6v8MFf556HT+cmis/g32plvZmsXWqezsbP4yZBvJhniPrYWeu/KOcVm6jrp770/Hfs7yZ7CHHjy7SVPvqXkyfeWPMl8GJLzwBC3tTV7fT/JkO8nGdL+vFml8sBsZsJW9y7Y6uVPpvNQxb1uDdM3nPXZy0759pIt31iyHybv5RvOKt9k1u3ff+J8Pl8=", difficulty: 4 },
  { url: "https://opt-pan.github.io/penpa-edit/#m=solve&p=7VbNbuM2EL77KQKeeSD1S+qWpt5eUrfdZhEEghHIjpIYka2sLDeBjATIY/ScQ077Bn2bAMXe9hUyHLrxkPKi6KF72cDWYPxpfr4ZcmguP66KpuSBMN9QccElfFKt8FGxxEdsPkeztiqzPb6/ai/rBhTOfxnx86JaloN8YzQe5CxknEl4Aja+74b3ufkRjgfr7n227k6zfHzHuw9bVW3V37M1yFG2ZomQLMuZYjwxwcYckMggMUWUQSKCSGGQgCABxpEOlPhGIRrRQGHac4vQKCFIjPmpTYIcod4tYgMRJNV+HIVeJH1qqye1pgJJSwrJ0OeY2mppJFssLMkrEsY9twiNNEV8kmmC2aiXQoTaKAzt2GAcml73bDS2kRJSAt1IHUpiZdRmUz5F0CslSOjvB2WXmiKRv69UhBQJaWUbRHNF/rqqBCOTJqo08HOlmIsidu1JE5X211DZljmIv/O0wEppE7VANxJaw/bx3AJsIhkzHWBhpHhtNz5pkI79/aITJERzpX7rdYqRqU1vL2jt7xcpLGkX8je1FAGmcyHkRFhKYfe+Y2WrIxwA8nefFLFdbkGxtO+p/MYA1Asm7Vq9QnDkSTz4TlC+QxmgPIJzkXchyh9RCpQxykO0GaI8RnmAMkKZoE1qTtbBII/t2f7vn/jN7s3u+7MzF5fh2UW5N6qbeVExuK+wZV2dLlfNeTEtWYb3HI7YYjWflI0DVXV9Xc0Wrt3sYlE35c5XBiwhHcvaZuWYT+rmzATf4jdFVTnO9trmQNNZM61cqG1mzu+iaeobB5kX7aUDTIoWrnjLy9m1G6lctC6BtnDLL64KL9t8W/HdgN0yfPKABwkPoNnrTmfdPu9+ssfxP/dF3v0Gt8Gfs25kLoM5Y7Aw5pzDf9oA1OFWPcb3RjuwoBSgjzb/yqCegGr7cnpoA/2a5d0RZybPD+htVDav/wCq6Ia/p/V8AsXkjLTDvlmuzuqr1cZWmoN739Id7qAbbuka1dI12g66por/ma4e39mFEP/pJv4N/pxuN6NWNzunDeAdAwfozsHa4Ha2XLw3RyZhf5QA3TFNgPoDBVB/pgDsjRVgX5ksE9UfLsPKny+TqjdiJhWdsnw8+PvT4+enx+eHp+eHP7/89fAC&a=TZhRriI7DET3Mt/3I1wgttcyevvfxviE4/AkpKoEOl0VXHHD37///fD681jr8fNYv++fx58fRi9GOaOeXr81oybr+XT04LrnXPfo6fWMGbHK477H6DlrMr2es+Zj88l7HaPXmlFfsh73k4xevzNCy2u0/PYl67cFfUevvulndPzNdZD1e687/vqmnxF3/x0tkO9OsAnrPdexCes9n2QT1nNWgaw9HtiStUcZm7D2aGET1p41sb32qH6h+ro9oz37ie2vvxd3f83dz2jPnjG9XqMTsl7jCLJe95NoidGC0RVzHUbXe66DrPdcB1k512H76xajK0cZRlfOmhhdOWtibeWsuc+e3fcY1V2Tu9fsC0ZXzF5DVswnIatmzwIt198Z1SgLdum6ZdS17ghrK2evIStnTcjXH9a+jjCzalaBfD0gf9VogayaO0C+qpG4apRBVs0dIKtmzyCjenek9/rs0eGmm7m9PvcFt7W+O/SbqA+36pnbpn+v7M/8jz9n/frZD+/buJ8fJ7tjvonzcBPP3Dbv4CbWh/eaZh3chBjeuE02uCnww3tNq3d3cK8X+Huu7TXf6mwf++l84366ZuN+u2Z72m81t4/t6QZu8w1uzzlwW+34255c4DbJu6O7zfHhppi57fkFbsr88L6X+cXftmbxtMM129OmTA/vz4efb+3bUwncZhbcqYbWu63g3ZG8OuGmE43bNO7da442uDW9O4hXJ9xMondbsejd4b0at9WK9phabe075Y073c/Gq7lDuM0gPJbr91x0LX74u7nrt4+gPR1ezd3D1r5NIXg1t95trsCwW6A37BXojd+PhuhMhfk63HwxF+YLDJrp4eicz6Dz892BYU3iKaxJPIX5wlPYc/EU1iSegsZ6eK9vtwXD3IFh1sCgjcA7R+PxcDOF1+uxPYWdEQwzhd54+5nWG2YHvWF20BueA2BYh2gPcwSGOQLD5wMwPCvAsD+iPcwOesPai25xYYc73G7AXNjrwPCsAMNM4SnMFJ4i/Hx7CjOFp7A+8RF2PjDs8mBYn9H5Cjv84WaNueulfYT5wkfYC9AedgI0hjlCY1ifaLzaWleYFzDMCxj2ZDDNCxrTvKAr7F1gmH0wzU50N7s6m+fD9VtvTl213vQMj+5bYVeFp+c5c9cL+fIcANNzAEweRQ9/NP/cC0zrEB9pRvCRZiQ7I2kPOty8MDde0J6eA2Bae/gY/ehN+w6Y9h0wzQuYnglgmhcwPQfAq7n7UtpPD3/Pmq3f3pSdqesLbr7wl2YKT+nZnp2dqx9uHWb3kfS58HDPbebS56ns7KRPi4ebI+bS7GRnJ83O4T5TMZc8OsHbR3q24yPtR2hPc4T2q7k1pr0STHOBxvRMRmN6JqMrzQW6roa+f5pfMM0vmGYEXWmNoaumxlpXmh0wzTWY5ghMcwSmOQLTjINljvBR9p3srKT9EV5Tbz13Pba/8nzGX5mjJEc+98FrarLnyhxl5yjNEbymVnvuem/fZX3iu8wUWGYKLPsUWPYpsKzV6j5V9qnDfQ5krjxPwNkH9qDMHb7L3gSWvQksz3b2oHxeYg/GL17L5yL8lfVcncEyg4fbs5i7fjuDZQYPt4aZK/MIls+KYJlHfJd5xGv5Ww9PZQ1XZ67sU4dbz8xdX+2pfKaq7lnls9/h9i/mqp+lPrzXN6d4LXOKvzKnYJlNPJW9DCz7MlhmAU/XS/sozxOw7NdgebaAZRbwWmYBf2VOq3vX9QW3X+Cp7BF4KusfT2XN46k8Z8DrpTNdnieHW//MlX0ET+U5A5bnDFj+Zjt4/sdggJHzN8YZ8CPQR69j5fyJcQZcY3M4Bs5fGAzawVV+fpwZUQZlewavXKJoLMEyimB5DB38/O/w+eOF13//AA==", difficulty: 4 },
]
export default async function Page() {
  return (
    <main>
      <p className="text-xl mb-2">掛け算リンク</p>
      <p>ルール説明</p>
      <p>1. 盤面の点にタテヨコに線を引いて全体で1つの輪っかを作りましょう。</p>
      <p>2. 〇の位置はループにおいて角となります。</p>
      <p>3. 〇以外の場所で角が発生しても構いません。</p>
      <p>4.〇の中の数字は、〇からでる2本の直線の長さの積となります。</p>

      <Image className='mx-auto my-4' src={"/graph/k.png"} width={800} height={400} alt='' />
      {
        data.map((kakezan, index) => {
          return (
            <Puzzle key={index} difficulty={kakezan.difficulty} url={kakezan.url} />
          )
        })
      }


    </main>
  )
}