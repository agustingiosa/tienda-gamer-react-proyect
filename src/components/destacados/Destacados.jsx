import ListItemDestacados from '../listItemsDestacados/ListItemsDestacados';
import './destacados.css'

const ItemListContainer = (props) => {
    return (
        <>
            <div className="productos container">
                <ListItemDestacados 
                    name="Ryzen 5 5500g" 
                    price="170.000" 
                    url = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEBMQDxMWEBYWGBYTFhcWEBAWFhAWFhIXFxYXGBYZICkhGRsmHBYWIjIiJiosLy8vGCA1OjktOSkuLywBCgoKDg0OGxAQGy4mISYuLi4sLC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLC4uLv/AABEIAM8A9AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABMEAABAwICBAgKBgYJBQEAAAABAAIDBBEFEgchMUEGE1FhcZGhsyIyMzVygYKDsbIjJDRzwdFCUmKSwuEUQ0RjdJOio/AWJVO04hX/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAgMG/8QAMhEAAgEDAQYEBAYDAQAAAAAAAAECAwQRMQUSIUFRgRMzcZEiYbHBIzKh0fDxFULhFP/aAAwDAQACEQMRAD8A7giIgCLw6Vo2kDpICsvxCEbZYx0yMH4oDJRa9+OUg21EI9/H+asP4UUA21UH+cw/AoDbotC7hjhw/tMXqcT8ArL+HeGD+0D1RTn4NQEkRRR+kPDBsmceiCb8Wq0/SThw2Old0Qu/GyAmCKEP0n0I2MnPu2D4uVl+lKl3QTH/ACh/Es4BPUXO3aVYd1PIemRg/NWH6V/1aXrqP/hMA6Wi5c7SrJupWDpncf4VZfpUqd1PEOl0h/JMA6ui5C/ShW7o4B7Mh/iXiq0qVkUpa6GGRtmHZI0+EwE68x5eRYB2FFy2k0yRny1K9vPHK1/Y4N+K3NJpUwt/julh9OFxt648yAnKLQ0fDHDZLZKuG53OkDD1PsVuYZ2PF2Oa8crXAjrCAuoiIAiIgCIiAIiIAiIgCjGkrzXUe6/9iNSdRnSV5rqPdd/GgOGkDmTVzdik+ACm/ok8c0rGPnzMZmFy3io87Dm/qwZHN1m18pUjpcdo+OkDOKhcHQF03GACYthe1pG4Buq/ObrbIOe0tJJJcRRvlttyMc+3TlGpeZoXMcWPaWOG1rmlrhv1g6wpjx92TTMrWR1MVPEx8zZSBUOMsjnAEC8rmsbE24GsnmWg4V1rJq2WaM5mvLHA+6Ze/Pe49SwDUoiLICIiAIiIAiIgCIiALHx3y3sx921ZCsY55Y+jH3bVhg1yovVlRYBQC+pbahoshDgS137JLbesa15o6fLrO34LNjVbcXLb3YFxbWKit6osvobmjx+sjtkqJRzGRzh1OuFuKXhziDdsjZPTiZ/BlUWarzFA8epHSTJM6FOWsUTqm0iTf1kDH+i9zPiHLaU+kGA+PDK3oyOHxB7FzZqutW6v60eeexwlZUXywdLptImFPNv6RxZGoiSOVlukubbtW7osbpJfI1EUnozRk9QK4NjWGZxnYPDG39sD8VFy0HaLq3t7iNaG8u5V1qLpSw+x9YouK6E5n/02VmZ2XiHHLmOUHjY9eXZfWV2pdziEREAUZ0lea6j3XfxqTKM6SfNdR7rv40Bw9ERbAIiIAiIgCIiAIiIAiIgCIiAKxjflj6MfdtV9WMb8t7MfdtWGDBWRTM39SxwFmRqHc1MLdRa7Ott5+LLlp+5kxrKYseNXs4AudQCrJcS1lw4mQ1UdWsbvzczRc9S1NViZOqPUOXf6uRYjKqQDKHED/nZzKRCxlJZl7FZVvoJ4j7kmpayOTxDcjaNhHSFmNUOZWyg3Ejr9N79akeEYiJRZ1g8bRyjlCj3VnKmt5afQ2t7qNR7r1NiFGOENFkfnaPBf2O39e3rUnCxsVpuMhc0aztHSNf8AL1rhZ1vCqp8nwZ0uaXiU2ufIz9CP2+b/AA7u9jXbVxLQj9vl/wAO7vY121elKIIiIAozpJ811Huu/jUmUZ0k+a6j3XfxoDh6Ii2AREQBFVoJ1DWVtaTB765HeofmuNa4p0VmbO1G3qVniCNSilLcEgI8U/vuXibg3GR9G5zTz2IP4hQlta3bw8rt+zJMtm110fcjKK9V0j4nZZBY7uQ9B3qyrKMlJZi8ogtNPDCIiyYCIiAKxjflvYj7tqvqzjp+l9iPu2rEuBtGLlJRWrMFh1rKiWFEsyJVlR5eT1cKapQUFyMuMrBrKnNqHijtVyplsMo37ViLra0P932KbaFzl+HHv+x5SyqimlWeVVjyDdpII3hVVLICWYTiHGtNxZzbX5+cdXas5RPBJ8kzb7HeCfXs7bKVkrzt7QVOpiOj4l3aVXUhl6o2OiaHJitS3+5cR0OljP4rsa5Xo4j/AO5Ody0zx1TRn8V1RXdtPfpRl8iprw3KjQREXc5BRnST5rqPdd/GpMozpJ811Huu/jQHD0RVaCdQ1rYFERxtqOrpXuLaFpOajFyfI6UaTq1FBczZYdAG6ztPZzLZmpYwXebfE9AWsFQGNvt5Byla2WUuN3G5VNTtZXUnOb4F7c3MLSKpU1x/mpvjjzRsbfm/mtxh+IRyg5DrG0HUR6lBl6jeWkOaSCNhBsQu9bZFGccQ4P3K+ntKqpZlxXsT6spGSsLHi4Ow72nlHOoLW0zopHRu2g7eUbiFLcBxEzRnOfDabHdcHYbdnqWJwrpbsbKNrfBPonZ1H4qv2dWnbXDoVNH9eXuSbynCvR8aOv2/4RdERelKUIiIArGPeV9mPuwr6x8eP03sR92FyrPESbs6G9cR+WWa6M61mMdYXWGFfJ1KFu70kj0VzPw6cp9EeHOuboiorDQ8i228sIpjhfAkSQskllLC8B2UNByg6xcnfZZg4Bw/+Z/UxYyMECRT4cBIN80n+3+Si3CTCBTT8WHF7S0PaTa9jcWNt9wexZMGrUyppczGu5QD1jWoYpRgsl4G81x2lVu0o/ApdGT9ny+Nx+RONHH2x33Tvnj/ACXTFzPRsfrj/unfOxdMXXZ/kL1ZzvvOfogiIppECjOknzXUe67+NSZRnST5rqPdd/GgOHrOwGWVlTC+nYJJQ8FjTsc7cNo+KwVuuBnnCl+9b+K2BOJeFWLNB43DM/oslPwDlqcekp6XGWufGwxSMYZGFjS0ZyQXAHZYtDuvlWXQ8M6pmKOgnkDoOPkhsWRjIM7mx+EBfUcu3ddRDhwZxiEwqHZ3B2UGwAyWBjsBsGUj13XCs2oZRN2dCNSuoS5p/QlVPwPaMRkE4+qwN48uPivY65Y2/NldfmZzqP4ZV4a6smfVRFlO4HimM4y7DmaGk5Te+UOJ5yt1i2MTHAqYF3lJDA867mOMvyi/sNB5bc6h2F4bLUSthgbme7qaN7nHc0cq3pJKCwcLhz8WW/quHtwJ/hmDYDVScVTmXPYusDUiwG0kvBAHSVHcVwSjixQUnGlkGoPkdIy8ZLCSC4iw15Rr5VvMVxKHC4DRUbg+peAZpdV4yRybjY+C3cNZ1nXEuC9Gyetghmu5sjiHeEQT4DnXzbb3C3OJN8L4KYeyTNBiDX3GXLxkDr39EjkVeFGCNjgdllEucFtgBqIaSDqJ3hW38H8DZNl/pTopI32LXStFnNOsHO3Xr51fxihp42tdBMJiTYjMw2Fr7lUbRppPxFFZ65w1h9OZY2M2/wANyeHyxlcV15ENxDgnNFRRVwc2SORrHuABDog8AgnlFyBfnCwMDweWqm4iDLmyl3hOIFm2vrAPKum0eMRRUeGQ1DQYqiDin32NPFsy3/Z1kHpB3LU8F8CfR41xJuWGKR0Tj+mzwdvONh6L71bZyVxzueIsc5jtrSWnpabH4K2svFftE/3sveOWItkAsbH/AC3sR/IFkrFx7y3sR/IFxr/lLLZXn9ma5XwdSsK6zYo9JfEi22k2reXYqqFVVHbCph5c7VQs+ij9BnyhXCxY7ZC2GKzmt8FmtxsPERs5bcyPbbmtq1nm5j1LQ3Lzm6lzzSF9oj+6HzvXQy4LnekFwNRERviaf9b1sYZF1IcAd9ERyOPwCj63WAHwX9I+BUS/WaL9USrHzl6M6Ho0+2P+6d87F05cv0ZH64/7p3zsXUFjZ/kr1Yv/ADn6IIiKaQwozpJ811Huu/jUmUZ0lea6j3XfxoDh6q1xBuDYjeDYhURbA9OcSbkkk6yb6yeW69YtXTTuEkz3SOADcztZsL2F9+1W1RwuLLSccxaO9tV8KrGfR/pz/QzP/wBaV9NHSkji43ukaMusOdmvr3jwis7gtj7qKZ0zGCS7DGQ5xbqLmm9x6KjrHZTYrJ51HoVMfBLsWm1bNefT0euPnzOhHSHSyfaMPY++03jff95gWmZjtIMThq4oTTwstdjWMBByOBIa021khRZFKKQ6TJPwfqJS93GNkkcXE/Wm3cTcmwu0KvCFlFHFxlLKXm5zAnY3KTexAO2yg+EQ+FnO7UOcnb2LKxWe0Zbvdq9QNz/znVTdzVSsqSSfz5rrjsW9pSdOi6zbXy5Pkv1NnwtqI34bhjGva9zIy17Q5pLDxcYs4DZs3qW6OccZVRsjn11FOCGuPjPjcMt77zqAPQ071yNeo3lpu0lp5QSD1hW2CoMjFvtE/wB7L3jlioTfWdZOsk7SiyAsbHvK+zH8gWSsbHvLexH8gXGv+UstlPFx2ZrVcjVte2bVGg8SRe3dNToyT6Z9uJ7Qqqo7Ypp5A7K2AvhjAOXwG7yL/RgD1K4+kuTYgXcHEWOsBo1dYuq0cjRHGCRfI3VcX8UblkNeDsWhuY09PcEE6u3Yfz7Fz3SA208TeSFo6nuC6W9c20ifaY/uh3j1sYZFltcC/T9n+JapbfBxZjjyn4D+ai3r/BZKsVmuu50HRkfrrvuXfOxdTXKdF5+uv+6f87F1ZLHyu7M3/nP0X0CIilkIKM6SvNdR7rv41JlGdJXmuo9138aA4eiItgEREBanjvrG1eYJlfVt8QOsalFr0N7jEu9nbSjTj4VbTk+hlNDTzLwxnKrUYI2lew6y1pQqqLTOd7O0lUjuY4ZzhextOPa0cltwWuqJi91z6uYK2Si2t7WNLjzIt1eSrYiliK5BERSiEEREBQqxjvlfZj7sLIWPjnlfZj7sLnV4wZLsHi5h6/Y1i9s2rwvTSoS1PU1I70GuqZcR2xAinni2muDOp01E4zxS28EMZr9yAt2xhGxQai4dhkLGOhc97WhpOcBrrCwOwnsWPUcPag+TijZ053n4gdi1wbZOhSHUubcP5AapoH6MbQeYlzjbqI61h1PCqtftmLRyNaxvaBftWolkc5xc8lzjrJJJJPOSspGGzwt1Qao2+s9ZWmtfUt0DYAcmpQr5/CollsyDcpS6L6k10VO+vvH9w8/7sS62uO6JX3xKQclO/vYl2Jd7aO7SSI17JSryx6ewREXcihRnSV5rqPdd/GpMozpK811Huu/jQHD0RFsAiIgCIiAIiIAiIgCIiAIiIAsfHB9L7LPkCyFYxryvss+QLEllYN6c3CSkuTyawqiq4LzdV7WD2UZKSUlzLrTuXpW7r20rvSn/AKlJtG0e66q68fTk/syqIikFKFVUVUBepB4V+RZvG7ViRagqTP1WVdUXi1cF/Rj/AOa23n69+RONDDr4jKTvgf3sS7WuJ6F/OEn+Hf3sa7YrEoW2+LCIiGAozpK811Huu/jUmUZ0lea6j3XfxoDh6KqotgEREAREQBERAEREARFtsLoNkjxztH4lca9eNGG9L+zvb28689yPd9EakoprTYZLMHGOMyhts1he19mpYVVgob5SF0fS2Rigx2ksZlB/YsZbIe9uwqRb6aP7kXVjGfK+yz5ApG/B4z4rnDqK0HCOHJUFt7+DHut+gFLpXdKs8RZCuLKtQWZrh6mqcFbV9WnBa1YY4otNmXW9HwparT0/4eV6BXhFxLdrKwXg5VL1ZVV08WRA/wAZb5zjtkuh117CtR7VcK6qbcMlXWtoUrjcWmMpfzoZUNLK8XZG5wyufqadbWEBxHLYkDUtk7AeKcDUuJa0njWQ65Y2jjRmBcMpF4X79g51lsxuKGCNsLniaKMta4BpbmmySSWN9gc2xvynpVibhS7OHxRMafDBLy5+cO47KCNQ8Hj39JtfZZZp01HicLq6lV+HkiV6M4I4sYqI4r5BAcuYgusTC7WRv1rr64dokc9+IucSXHiSCTcmwdGBc9AHUu4hdSGEREAWLiNLxrCzcdqykQHPcR4ARuuWi3Rq+CjddwGlZ4tz0hdmXh0YO0ID5+qcCnZtbdYMkLm+M0j1L6EnwuJ21o6lqK3gnC++rsQHDkXTcQ4BNOtoUcreBkrdl1nIIqi2FRg8zNrT1LDfE4bQR6lnILaIs/DKDOczvFH+r+S51asaUd6R1oUJ1pqEFxPeF0Gbw3jwdw/W5+hbtAqLzVxXlWnvS7LoevtbWFvDdj3fVku4GyPbBVuiF3gNLRa93ZXW1b1X/rCpZqqIGnpa+M9TrrUYDVVked1M0vGrOAzPy2uNvLsW9oeFUj5GQVELfDcGbHNtc28V17qbRq/hxipOL00ynxKu4ofizm4RmtfzYksIiVdMHyvkAyhzi4D9W52KG8LftTvQj7sKecIqRsVVJGwWaCCByZgHW7VA+Fv2p3ox92FmwTVxJS14/UztOUZWkHHThj2NOqOF1VVVw0msMoYTlCSlHVFkhUVxzVbtzKHOLi8Hq7W4jXhvLXmiiqr9HRSyuywxvlPIxpdbpts9al2D6M62WxkywNP6xzu/dbq7VhRb0RvUr06f55JENYsyioZpnZYY3ynkYxzrdNti7Ng2jGiisZGmc/3huP3BYdd1M6SgiiaGxsawDYGtAA9QUuMMJI8zXunUnKS5/RHFsH0YV0tjMWUzf2jnf+63V2qcYPovoYrGbNUu/bdZv7jbdt1OwEW5EMWioYomhkMbI2jcxrWjqCykRAEREAREQBERAEREBSytvp2naFdRAa2owaJ21oWkruB8TtgHUpaiA5fX8Bf1QtVNglVFqHhAbAR+S7IWhWZaVjtoC0nTjNYksnSnVnTeYNr0OKullb48Z9X5FG1rN5y9Isus1WAxO/RC0ddwMY7YFEns6jLTK7k+nta4jrh+q/YjODY3LBmMBaQ61wQHA2vbZ0qQQ8Nr246FriNd2nYeh35rR1vApzdbLjoWpmwiqj2Ekc4uuatbimsU58OjRvK9tazzWp4fVP8AozsWrjNO+YjLmIsNtgAANfqUJ4W/anejH3YUhbJMDZ0d+jUvFVwZlqpzIAWNIYLW1+CwA825a2dCrCs5VFrz+Z0v7mhUt4wpPR6fLBCVkUlDLKbRMc/oGrr2LqeC6OYxYvbm9LX2bFNsP4PRRgWaOpWhSnHcJ0fVUtjIRGOQDMfyHapxg+jKlZYyt40/tm/+nZ2LoMcDW7AriGU2tDXUGDwxNDWMa0DYAAAPUFntYBsXpEMBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB5cwHcseWhY7aAspEBqXYFETewWZT0MbNgCykQFA1VREAREQBERAEREAREQBERAEREB//2Q==' 
                    
                ></ListItemDestacados>
                <ListItemDestacados
                    name="Mother MSI A520M-A PRO DDR4 AM4 " 
                    price="77.000" 
                    url = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21848_Mother_MSI_A520M-A_PRO_DDR4_AM4_29d05f8c-grn.jpg' 
                    
                ></ListItemDestacados>
                <ListItemDestacados 
                    name="Gabinete Corsair Crystal 465X RGB iCue Smart Black Mid Tower" 
                    price="90.000" 
                    url = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18529_Gabinete_Corsair_Crystal_465X_RGB_iCue_Smart_Black_Mid_Tower_b2ac7974-grn.jpg' 
                ></ListItemDestacados>
            </div>
        </>
    )
}

export default ItemListContainer;