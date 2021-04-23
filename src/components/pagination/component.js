import React, { Component } from 'react'

class Pagination extends Component {
  render() {
    return (
      <div class="px-5 py-2 border-t flex flex-col xs:flex-row items-center xs:justify-between">
        <span class="text-xs xs:text-sm text-gray-900">
          Showing 100 entries from page {this.props.preferences.page}.
        </span>

        <div class="inline-flex mt-1 xs:mt-0">
          {this.props.preferences.page > 1 && (
            <button
              onClick={() => {
                this.props.updatePage(this.props.preferences.page - 1)
              }}
              class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
            >
              Prev
            </button>
          )}
          <button
            onClick={() => {
              this.props.updatePage(this.props.preferences.page + 1)
            }}
            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default Pagination
