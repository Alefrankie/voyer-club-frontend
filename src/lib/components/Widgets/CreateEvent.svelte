<div class="ui-block">
  <div class="today-events calendar">
    <div class="today-events-thumb">
      <div class="date">
        <div class="day-number">00</div>
        <div class="day-week">Sin evento</div>
        <div class="day-week">00:00</div>
      </div>
    </div>

    <div class="list">
      <div class="control-block-button">
        <a
          class="btn btn-control bg-breez"
          data-bs-target="#crear_evento"
          data-bs-toggle="modal"
          href="#/"
        >
          <svg class="olymp-plus-icon">
            <use xlink:href="#olymp-plus-icon" />
          </svg>
          <div class="ripple-container" />
        </a>
      </div>

      <div
        class="accordion day-event"
        data-day="2"
        data-month="12"
        id="accordionExample"
      >
        <div class="accordion-item">
          <div class="accordion-header" id="headingOne">
            <div class="event-time">
              <time datetime="2004-07-24T18:18">Evento</time>
            </div>
            <button
              aria-controls="collapseOne"
              aria-expanded="true"
              class="accordion-button"
              data-bs-target="#collapseOne"
              data-bs-toggle="collapse"
              type="button"
            >
              <svg height="8" width="8">
                <use xlink:href="#olymp-dropdown-arrow-icon" />
              </svg>
            </button>
          </div>

          <div
            aria-labelledby="headingOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            id="collapseOne"
            style=""
          >
            <div class="accordion-body" style="text-align: justify;">
              <div class="place inline-items">
                Evento 1
                <i class="fa fa-dollar-sign" style="font-size: 20px;" />
                <span> 0.00 Precio </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
