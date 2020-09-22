

``mx.model.buckets``
========================================

Description
----------------------

Train RNN with bucket support

Usage
----------

.. code:: r

	mx.model.buckets(

	  symbol,

	  train.data,

	  eval.data = NULL,

	  metric = NULL,

	  arg.params = NULL,

	  aux.params = NULL,

	  fixed.params = NULL,

	  num.round = 1,

	  begin.round = 1,

	  initializer = mx.init.uniform(0.01),

	  optimizer = "sgd",

	  ctx = NULL,

	  batch.end.callback = NULL,

	  epoch.end.callback = NULL,

	  kvstore = "local",

	  verbose = TRUE,

	  metric_cpu = TRUE

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``symbol``                             | Symbol or list of Symbols representing the model           |
+----------------------------------------+------------------------------------------------------------+
| ``train.data``                         | Training data created by mx.io.bucket.iter                 |
+----------------------------------------+------------------------------------------------------------+
| ``eval.data``                          | Evaluation data created by mx.io.bucket.iter               |
+----------------------------------------+------------------------------------------------------------+
| ``num.round``                          | int, number of epoch                                       |
+----------------------------------------+------------------------------------------------------------+
| ``verbose``                            |                                                            |
+----------------------------------------+------------------------------------------------------------+



