

``predict.MXFeedForwardModel``
============================================================

Description
----------------------

Predict the outputs given a model and dataset.

Usage
----------

.. code:: r

	predict.MXFeedForwardModel(

	  model,

	  X,

	  ctx = NULL,

	  array.batch.size = 128,

	  array.layout = "auto",

	  allow.extra.params = FALSE

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``model``                              | The MXNet Model.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``X``                                  | The dataset to predict.                                    |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | mx.cpu() or mx.gpu(). The device used to generate the      |
|                                        | prediction.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``array.batch.size``                   | The batch size used in batching. Only used when X is R's   |
|                                        | array.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``array.layout``                       | can be "auto", "colmajor", "rowmajor", (detault=auto).     |
|                                        |                                                            |
|                                        | The layout of array. "rowmajor" is only supported for two  |
|                                        | dimensional                                                |
|                                        | array.                                                     |
|                                        | For matrix, "rowmajor" means dim(X) = c(nexample,          |
|                                        | nfeatures),                                                |
|                                        | "colmajor" means dim(X) = c(nfeatures, nexample)           |
|                                        | "auto" will auto detect the layout by match the feature    |
|                                        | size,                                                      |
|                                        | and will report error when X is a square matrix to ask     |
|                                        | user to explicitly specify                                 |
|                                        | layout.                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``allow.extra.params``                 | Whether allow extra parameters that are not needed by      |
|                                        | symbol.                                                    |
|                                        |                                                            |
|                                        | If this is TRUE, no error will be thrown when arg_params   |
|                                        | or                                                         |
|                                        | aux_params                                                 |
|                                        | contain extra parameters that is not needed by the         |
|                                        | executor.                                                  |
+----------------------------------------+------------------------------------------------------------+



