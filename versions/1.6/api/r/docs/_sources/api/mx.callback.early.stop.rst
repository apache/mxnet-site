

``mx.callback.early.stop``
====================================================

Description
----------------------

Early stop with different conditions.  

Early stopping applying different conditions: hard thresholds or epochs number from the best score. Tested with "epoch.end.callback" function.

Usage
----------

.. code:: r

	mx.callback.early.stop(

	  train.metric = NULL,

	  eval.metric = NULL,

	  bad.steps = NULL,

	  maximize = FALSE,

	  verbose = FALSE

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``train.metric``                       | Numeric. Hard threshold for the metric of the training     |
|                                        | data set                                                   |
|                                        | (optional)                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``eval.metric``                        | Numeric. Hard threshold for the metric of the evaluating   |
|                                        | data set (if set,                                          |
|                                        | optional)                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``bad.steps``                          | Integer. How much epochs should gone from the best score?  |
|                                        | Use this option with evaluation data                       |
|                                        | set                                                        |
+----------------------------------------+------------------------------------------------------------+
| ``maximize``                           | Logical. Do your model use maximizing or minimizing        |
|                                        | optimization?                                              |
+----------------------------------------+------------------------------------------------------------+
| ``verbose``                            | Logical                                                    |
+----------------------------------------+------------------------------------------------------------+



