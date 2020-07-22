

``mx.symbol.random_exponential``
================================================================

Description
----------------------

Draw random samples from an exponential distribution.

Samples are distributed according to an exponential distribution parametrized by *lambda* (rate).


**Example**::

	 
	 exponential(lam=4, shape=(2,2)) = [[ 0.0097189 ,  0.08999364],
	 [ 0.04146638,  0.31715935]]
	 
	 

Usage
----------

.. code:: r

	mx.symbol.random_exponential(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lam``                                | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Lambda parameter (rate) of the exponential distribution.   |
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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/sample_op.cc#L137

