

``mx.symbol.random_gamma``
====================================================

Description
----------------------

Draw random samples from a gamma distribution.

Samples are distributed according to a gamma distribution parametrized by *alpha* (shape) and *beta* (scale).


**Example**::

	 
	 gamma(alpha=9, beta=0.5, shape=(2,2)) = [[ 7.10486984,  3.37695289],
	 [ 3.91697288,  3.65933681]]
	 
	 

Usage
----------

.. code:: r

	mx.symbol.random_gamma(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``alpha``                              | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Alpha parameter (shape) of the gamma distribution.         |
+----------------------------------------+------------------------------------------------------------+
| ``beta``                               | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Beta parameter (scale) of the gamma distribution.          |
+----------------------------------------+------------------------------------------------------------+
| ``shape``                              | Shape(tuple), optional, default=None.                      |
|                                        |                                                            |
|                                        | Shape of the output.                                       |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | string, optional, default=''.                              |
|                                        |                                                            |
|                                        | Context of output, in format [cpu|gpu|cpu_pinned](n). Only |
|                                        | used for imperative                                        |
|                                        | calls.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {'None', 'float16', 'float32', 'float64'},optional,        |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | DType of the output in case this can't be inferred.        |
|                                        | Defaults to float32 if not defined                         |
|                                        | (dtype=None).                                              |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/sample_op.cc#L125

