

``mx.symbol.SVMOutput``
==============================================

Description
----------------------

Computes support vector machine based transformation of the input.

This tutorial demonstrates using SVM as output layer for classification instead of softmax:
https://github.com/dmlc/mxnet/tree/master/example/svm_mnist.

Usage
----------

.. code:: r

	mx.symbol.SVMOutput(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data for SVM transformation.                         |
+----------------------------------------+------------------------------------------------------------+
| ``label``                              | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Class label for the input data.                            |
+----------------------------------------+------------------------------------------------------------+
| ``margin``                             | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | The loss function penalizes outputs that lie outside this  |
|                                        | margin. Default margin is                                  |
|                                        | 1.                                                         |
+----------------------------------------+------------------------------------------------------------+
| ``regularization.coefficient``         | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Regularization parameter for the SVM. This balances the    |
|                                        | tradeoff between coefficient size and                      |
|                                        | error.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``use.linear``                         | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Whether to use L1-SVM objective. L2-SVM objective is used  |
|                                        | by                                                         |
|                                        | default.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


