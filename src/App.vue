<template>
  <div class="weather">
    <div class="navbar">
      <select v-model="selected">
        <option v-for="option in options" :key="option.index">{{option.name}}</option>
      </select>
      <h2>LOGO</h2>
    </div>
    <hr />
    <h4>{{weather.name.toUpperCase()}} - {{weather.day1.description.toUpperCase()}}</h4>
    <div class="weather_head">
      <div class="main">
        <img class="img" :src=" ('https://openweathermap.org/img/wn/' + weather.day1.icon ) + '.png' " alt />
        <div class="temp">
          <h1>{{weather.day1.temp-1}}</h1>
          <p>O</p>
        </div>
      </div>
      <div class="main column">
        <i class="icon">
          <img src="./assets/font/wind.svg" alt />
        </i>
        {{(weather.day1.speed)}} м/с
      </div>
      <div class="main column">
        <i class="icon">
          <img src="./assets/font/humidity.svg" alt />
        </i>
        {{weather.day1.humidity}}%
      </div>
    </div>
    <div class="weather_body">
      <div class="time">
        <h4>{{weather.day1.dt_txt1}}</h4>
        <img :src=" ('https://openweathermap.org/img/wn/' + weather.day1.icon1 ) + '.png' " alt />
        <div class="temp">
          <h1>{{weather.day1.temp1}}</h1>
          <p>O</p>
        </div>
      </div>
      <div class="time">
        <h4>{{weather.day1.dt_txt2}}</h4>
        <img :src=" ('https://openweathermap.org/img/wn/' + weather.day1.icon2 ) + '.png' " alt />
        <div class="temp">
          <h1>{{weather.day1.temp2}}</h1>
          <p>O</p>
        </div>
      </div>
      <div class="time">
        <h4>{{weather.day1.dt_txt3}}</h4>
        <img :src=" ('https://openweathermap.org/img/wn/' + weather.day1.icon3 ) + '.png' " alt />
        <div class="temp">
          <h1>{{weather.day1.temp3}}</h1>
          <p>O</p>
        </div>
      </div>
      <div class="time">
        <h4>{{weather.day1.dt_txt4}}</h4>
        <img :src=" ('https://openweathermap.org/img/wn/' + weather.day1.icon4 ) + '.png' " alt />
        <div class="temp">
          <h1>{{weather.day1.temp4}}</h1>
          <p>O</p>
        </div>
      </div>
      <div class="time">
        <h4>{{weather.day1.dt_txt5}}</h4>
        <img :src=" ('https://openweathermap.org/img/wn/' + weather.day1.icon5 ) + '.png' " alt />
        <div class="temp">
          <h1>{{weather.day1.temp5}}</h1>
          <p>O</p>
        </div>
      </div>
    </div>
    <div class="weather_before">  
      <h4>ПРОГНОЗ НА ПЕРЕД</h4>
      <div class="day">
        <div>
          <p>{{weather.day2.dt_txt}}</p>
        </div>
        <div class="img">
          <img :src=" ('https://openweathermap.org/img/wn/' + weather.day2.icon ) + '.png' " alt />
        </div>
        <div class="row">
          <i class="icon">
            <img src="./assets/font/temperature-day.svg" alt />
          </i>
          <div class="temp">
            <h1>{{weather.day2.temp_day}}</h1>
            <p>O</p>
          </div>
        </div>
        <div class="row">
          <i class="icon">
            <img src="./assets/font/temperature-night.svg" alt />
          </i>
          <div class="temp">
            <h1>{{weather.day2.temp_night}}</h1>
            <p>O</p>
          </div>
        </div>
        <div>
          <p>{{weather.day2.speed}} м/с</p>
          <p>{{weather.day2.humidity}} %</p>
        </div>
      </div>
      <div class="day">
        <div>
          <p>{{weather.day3.dt_txt}}</p>
        </div>
        <div class="img">
          <img :src=" ('https://openweathermap.org/img/wn/' + weather.day3.icon ) + '.png' " alt />
        </div>
        <div class="row">
          <i class="icon">
            <img src="./assets/font/temperature-day.svg" alt />
          </i>
          <div class="temp">
            <h1>{{weather.day3.temp_day}}</h1>
            <p>O</p>
          </div>
        </div>
        <div class="row">
          <i class="icon">
            <img src="./assets/font/temperature-night.svg" alt />
          </i>
          <div class="temp">
            <h1>{{weather.day3.temp_night}}</h1>
            <p>O</p>
          </div>
        </div>
        <div>
          <p>{{weather.day3.speed}} м/с</p>
          <p>{{weather.day3.humidity}} %</p>
        </div>
      </div>
      <div class="day">
        <div>
          <p>{{weather.day4.dt_txt}}</p>
        </div>
        <div class="img">
          <img :src=" ('https://openweathermap.org/img/wn/' + weather.day4.icon ) + '.png' " alt />
        </div>
        <div class="row">
          <i class="icon">
            <img src="./assets/font/temperature-day.svg" alt />
          </i>
          <div class="temp">
            <h1>{{weather.day4.temp_day}}</h1>
            <p>O</p>
          </div>
        </div>
        <div class="row">
          <i class="icon">
            <img src="./assets/font/temperature-night.svg" alt />
          </i>
          <div class="temp">
            <h1>{{weather.day4.temp_night}}</h1>
            <p>O</p>
          </div>
        </div>
        <div>
          <p>{{weather.day4.speed}} м/с</p>
          <p>{{weather.day4.humidity}} %</p>
        </div>
      </div>
      <div class="day">
        <div>
          <p>{{weather.day5.dt_txt}}</p>
        </div>
        <div class="img">
          <img :src=" ('https://openweathermap.org/img/wn/' + weather.day5.icon ) + '.png' " alt />
        </div>
        <div class="row">
          <i class="icon">
            <img src="./assets/font/temperature-day.svg" alt />
          </i>
          <div class="temp">
            <h1>{{weather.day5.temp_day}}</h1>
            <p>O</p>
          </div>
        </div>
        <div class="row">
          <i class="icon">
            <img src="./assets/font/temperature-night.svg" alt />
          </i>
          <div class="temp">
            <h1>{{weather.day5.temp_night}}</h1>
            <p>O</p>
          </div>
        </div>
        <div>
          <p>{{weather.day5.speed}} м/с</p>
          <p>{{weather.day5.humidity}} %</p>
        </div>
      </div>
      <div class="day">
        <div>
          <p>{{weather.day6.dt_txt}}</p>
        </div>
        <div class="img">
          <img :src=" ('https://openweathermap.org/img/wn/' + weather.day6.icon ) + '.png' " alt /><!-- {{}} -->
        </div>
        <div class="row">
          <i class="icon">
            <img src="./assets/font/temperature-day.svg" alt />
          </i>
          <div class="temp">
            <h1>{{weather.day6.temp_day}}</h1>
            <p>O</p>
          </div>
        </div>
        <div class="row">
          <i class="icon">
            <img src="./assets/font/temperature-night.svg" alt />
          </i>
          <div class="temp">
            <h1>{{weather.day6.temp_night}}</h1>
            <p>O</p>
          </div>
        </div>
        <div>
          <p>{{weather.day6.speed}} м/с</p>
          <p>{{weather.day6.humidity}} %</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters, mapMutations} from 'vuex'

export default {
  data() {
    return {
      str: '2021-03-31 14:35',
      selected: 'Алматы',
      options: [
        { name: 'Астана' },
        { name: 'Алматы' },
        { name: 'Шымкент' },
        { name: 'Актобе' },
        { name: 'Талдыкорган' },
        { name: 'Атырау' },
        { name: 'Усть-Каменогорск' },
        { name: 'Тараз' },
        { name: 'Уральск' },
        { name: 'Караганда' },
        { name: 'Костанай' },
        { name: 'Кызылорда' },
        { name: 'Актау' },
        { name: 'Павлодар' },
        { name: 'Петропавловск' },
        { name: 'Кокшетау' }
      ],
      id: '',
      weather: {
        name: '??', 
        day1: { 
          description: '??',
          icon: '??',
          temp: '??',          
          speed: '??',
          humidity: '??',
          dt_txt1: '??',
          icon1: '??',
          temp1: '??',
          dt_txt2: '??',
          icon2: '??',
          temp2: '??',
          dt_txt3: '??',
          icon3: '??',
          temp3: '??',
          dt_txt4: '??',
          icon4: '??',
          temp4: '??',
          dt_txt5: '??',
          icon5: '??',
          temp5: '??'
        },
        day2: {
          dt_txt: '??',
          icon: '??',
          temp_day: '??',
          temp_night: '??',
          speed: '??',
          humidity: '??'
        },
        day3: {
          dt_txt: '??',
          icon: '??',
          temp_day: '??',
          temp_night: '??',
          speed: '??',
          humidity: '??'
        },
        day4: {
          dt_txt: '??',
          icon: '??',
          temp_day: '??',
          temp_night: '??',
          speed: '??',
          humidity: '??'
        },
        day5: {
          dt_txt: '??',
          icon: '??',
          temp_day: '??',
          temp_night: '??',
          speed: '??',
          humidity: '??'
        },
        day6: {
          dt_txt: '??',
          icon: '??',
          temp_day: '??',
          temp_night: '??',
          speed: '??',
          humidity: '??'
        }
      }
    };
  },
  computed: {
    ...mapGetters ([
      'key','city'
    ])
  },
  methods: {
    ...mapMutations([
      'set_city'
    ]),
    selecteds() {
      let value = this.selected
      if (value == 'Алматы') {
        this.id = 'Almaty'
      } else if (value == 'Астана') {
        this.id = 'Astana'
      } else if (value == 'Кокшетау') {
        this.id = 'Kokshetau'
      } else if (value == 'Актобе') {
        this.id = 'Aktobe'
      } else if (value == 'Талдыкорган') {
        this.id = 'Taldykorgan'
      } else if (value == 'Атырау') {
        this.id = 'Atyrau'
      } else if (value == 'Усть-Каменогорск') {
        this.id = 'Ust-Kamenogorsk'
      } else if (value == 'Тараз') {
        this.id = 'Taraz'
      } else if (value == 'Уральск') {
        this.id = 'Uralsk'
      } else if (value == 'Караганда') {
        this.id = 'Karaganda'
      } else if (value == 'Костанай') {
        this.id = 'Kostanay'
      } else if (value == 'Кызылорда') {
        this.id = 'Kyzylorda'
      } else if (value == 'Актау') {
        this.id = 'Aktau'
      } else if (value == 'Павлодар') {
        this.id = 'Pavlodar'
      } else if (value == 'Петропавловск') {
        this.id = 'Petropavlovsk'
      } else if (value == 'Шымкент') {
        this.id = 'Shymkent'
      }
      let id = this.id
      this.set_city(id)
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.id}&units=metric&appid=${this.key}&lang=ru`)
      .then(weather => {
        this.weather.name               = weather.data.city.name
        this.weather.day1.description   = weather.data.list[0].weather[0].description
        this.weather.day1.icon          = weather.data.list[0].weather[0].icon
        this.weather.day1.temp          = weather.data.list[0].main.temp.toFixed()
        this.weather.day1.speed         = weather.data.list[0].wind.speed.toFixed()  
        this.weather.day1.humidity      = weather.data.list[0].main.humidity
        this.weather.day1.dt_txt1       = weather.data.list[2].dt_txt.slice(11,16)
        this.weather.day1.icon1         = weather.data.list[2].weather[0].icon 
        this.weather.day1.temp1         = weather.data.list[2].main.temp.toFixed()
        this.weather.day1.dt_txt2       = weather.data.list[3].dt_txt.slice(11,16)
        this.weather.day1.icon2         = weather.data.list[3].weather[0].icon 
        this.weather.day1.temp2         = weather.data.list[3].main.temp.toFixed()
        this.weather.day1.dt_txt3       = weather.data.list[4].dt_txt.slice(11,16)
        this.weather.day1.icon3         = weather.data.list[4].weather[0].icon
        this.weather.day1.temp3         = weather.data.list[4].main.temp.toFixed()
        this.weather.day1.dt_txt4       = weather.data.list[5].dt_txt.slice(11,16)
        this.weather.day1.icon4         = weather.data.list[5].weather[0].icon 
        this.weather.day1.temp4         = weather.data.list[5].main.temp.toFixed()
        this.weather.day1.dt_txt5       = weather.data.list[6].dt_txt.slice(11,16)
        this.weather.day1.icon5         = weather.data.list[6].weather[0].icon
        this.weather.day1.temp5         = weather.data.list[6].main.temp.toFixed() 

        this.weather.day2.dt_txt        = weather.data.list[7].dt_txt.slice(5,10).replaceAll('-','/')
        this.weather.day2.icon          = weather.data.list[7].weather[0].icon
        this.weather.day2.temp_day      = weather.data.list[9].main.temp.toFixed() 
        this.weather.day2.temp_night    = weather.data.list[6].main.temp.toFixed()          
        this.weather.day2.speed         = weather.data.list[7].wind.speed.toFixed()   
        this.weather.day2.humidity      = weather.data.list[7].main.humidity 

        this.weather.day3.dt_txt        = weather.data.list[15].dt_txt.slice(5,10).replaceAll('-','/')
        this.weather.day3.icon          = weather.data.list[15].weather[0].icon
        this.weather.day3.temp_day      = weather.data.list[17].main.temp.toFixed() 
        this.weather.day3.temp_night    = weather.data.list[14].main.temp.toFixed()          
        this.weather.day3.speed         = weather.data.list[15].wind.speed.toFixed()   
        this.weather.day3.humidity      = weather.data.list[15].main.humidity 

        this.weather.day4.dt_txt        = weather.data.list[23].dt_txt.slice(5,10).replaceAll('-','/')
        this.weather.day4.icon          = weather.data.list[23].weather[0].icon
        this.weather.day4.temp_day      = weather.data.list[25].main.temp.toFixed() 
        this.weather.day4.temp_night    = weather.data.list[22].main.temp.toFixed()          
        this.weather.day4.speed         = weather.data.list[23].wind.speed.toFixed()   
        this.weather.day4.humidity      = weather.data.list[23].main.humidity 

        this.weather.day5.dt_txt        = weather.data.list[31].dt_txt.slice(5,10).replaceAll('-','/')
        this.weather.day5.icon          = weather.data.list[31].weather[0].icon
        this.weather.day5.temp_day      = weather.data.list[33].main.temp.toFixed() 
        this.weather.day5.temp_night    = weather.data.list[30].main.temp.toFixed()          
        this.weather.day5.speed         = weather.data.list[31].wind.speed.toFixed()   
        this.weather.day5.humidity      = weather.data.list[31].main.humidity 

        this.weather.day6.dt_txt        = weather.data.list[39].dt_txt.slice(5,10).replaceAll('-','/')
        this.weather.day6.icon          = weather.data.list[39].weather[0].icon
        this.weather.day6.temp_day      = weather.data.list[39].main.temp.toFixed() 
        this.weather.day6.temp_night    = weather.data.list[38].main.temp.toFixed()          
        this.weather.day6.speed         = weather.data.list[39].wind.speed.toFixed()    
        this.weather.day6.humidity      = weather.data.list[39].main.humidity 
      })
    }
  },
  watch: {
    selected() {
      this.selecteds(this.selected);
    }
  },
  mounted() {
    let value = this.city
    if (value == 'Almaty') {
      value = 'Алматы'
    } else if (value == 'Astana') {
      value = 'Астана'
    } else if (value == 'Kokshetau') {
      value = 'Кокшетау'
    } else if (value == 'Aktobe') {
      value = 'Актобе'
    } else if (value == 'Taldykorgan') {
      value = 'Талдыкорган'
    } else if (value == 'Atyrau') {
      value = 'Атырау'
    } else if (value == 'Ust-Kamenogorsk') {
      value = 'Усть-Каменогорск'
    } else if (value == 'Taraz') {
      value = 'Тараз'
    } else if (value == 'Uralsk') {
      value = 'Уральск'
    } else if (value == 'Karaganda') {
      value = 'Караганда'
    } else if (value == 'Kostanay') {
      value = 'Костанай'
    } else if (value == 'Kyzylorda') {
      value = 'Кызылорда'
    } else if (value == 'Aktau') {
      value = 'Актау'
    } else if (value == 'Pavlodar') {
      value = 'Павлодар'
    } else if (value == 'Petropavlovsk') {
      value = 'Петропавловск'
    } else if (value == 'Shymkent') {
      value = 'Шымкент'
    }
    this.selected = value
    this.selecteds()
  }
};
</script>

<style lang="scss">
.weather {
  color: $text;
  max-width: $container;
  margin: auto;
  .navbar {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    select {
      background: $bg;
      border: 1px solid $text;
      color: $text;
      padding: 5px;
      width: 180px;
      font-size: 20px;
      option {
        font-size: 15px;
      }
    }
  }
  &_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    .main {
      display: flex;
      align-items: center;
      margin-top: 10px;
      .img {
        width: 100px;
      }
      .icon {
        width: 30px;
      }
      .temp {
        display: flex;
        h1 {
          font-size: 50px;
        }
      }
    }
    .column {
      flex-direction: column;
      align-items: center;
    }
  }
  &_body {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    .time {
      display: flex;
      flex-direction: column;
      align-items: center;
      h4 {
        font-size: 15px;
      }
      img {
        width: 50px;
      }
      .temp {
        display: flex;
        h1 {
          font-size: 25px;
        }
        p {
          font-size: 10px;
        }
      }
    }
  }
  &_before {
    margin-top: 25px;
    margin-bottom: 25px;
    .day {
      margin-top: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      .img {
        img {
          width: 40px;
        }
      }
      .temp {
        display: flex;
        h1 {
          font-size: 22px;
        }
        p {
          font-size: 10px;
        }
      }
      .row {
        display: flex;
        .icon {
          width: 23px;
        }
      }
      .column {
        flex-direction: column;
      }
    }
  }
  h4 {
    margin-top: 10px;
  }
}
</style>