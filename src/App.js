import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => (
    <div className={classes.container}>
        <DataQuery query={query}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                  <>
                    <h1>
                      {i18n.t("Hello {{name}}, this is where the app goes", {
                        name: data.me.name,
                      })}
                    </h1>
                    <h3>
                      "Welcome back today Nov 4 submitting a fix but not
                      releasing again"
                    </h3>
                  </>
                );
            }}
        </DataQuery>
    </div>
)

export default MyApp
